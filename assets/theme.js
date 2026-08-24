(() => {
  const storageKey = 'smtnkc-theme';
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let themeTransitionVersion = 0;

  const storedTheme = () => {
    try {
      const value = window.localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch (_) {
      return null;
    }
  };

  const currentTheme = () => storedTheme() || (media.matches ? 'dark' : 'light');

  const applyTheme = (theme) => {
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      const label = isDark ? button.dataset.labelLight : button.dataset.labelDark;
      button.setAttribute('aria-pressed', String(isDark));
      if (label) button.setAttribute('aria-label', label);
    });
  };

  const applyThemeWithoutLanguageTransition = (theme) => {
    const transitionVersion = ++themeTransitionVersion;
    root.classList.add('theme-switching');
    applyTheme(theme);

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (transitionVersion === themeTransitionVersion) {
          root.classList.remove('theme-switching');
        }
      });
    });
  };

  applyTheme(currentTheme());

  const connectControls = () => {
    applyTheme(currentTheme());

    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        try {
          window.localStorage.setItem(storageKey, nextTheme);
        } catch (_) {
          // The selected theme still applies for this page when storage is unavailable.
        }
        applyThemeWithoutLanguageTransition(nextTheme);
      });
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', connectControls, { once: true });
  } else {
    connectControls();
  }

  const handleSystemThemeChange = () => {
    if (!storedTheme()) applyThemeWithoutLanguageTransition(currentTheme());
  };

  if (typeof media.addEventListener === 'function') {
    media.addEventListener('change', handleSystemThemeChange);
  } else if (typeof media.addListener === 'function') {
    media.addListener(handleSystemThemeChange);
  }
})();
