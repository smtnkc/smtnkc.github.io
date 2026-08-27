(() => {
  const toggle = document.querySelector('[data-blog-language-toggle]');
  const description = document.querySelector('[data-blog-description]');
  const panels = Array.from(document.querySelectorAll('[data-blog-language-panel]'));
  if (!toggle || !description || panels.length === 0) return;

  const setLanguage = (language, updateUrl = true) => {
    const activeLanguage = language === 'en' ? 'en' : 'tr';
    const isEnglish = activeLanguage === 'en';

    document.documentElement.lang = activeLanguage;
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.blogLanguagePanel !== activeLanguage;
    });

    toggle.querySelectorAll('[data-blog-language]').forEach((segment) => {
      if (segment.dataset.blogLanguage === activeLanguage) segment.setAttribute('aria-current', 'page');
      else segment.removeAttribute('aria-current');
    });

    const nextLabel = isEnglish ? 'Türkçeye geç' : 'Switch to English';
    toggle.setAttribute('aria-label', nextLabel);
    toggle.setAttribute('title', nextLabel);

    const nextDescription = isEnglish
      ? description.dataset.descriptionEn
      : description.dataset.descriptionTr;
    description.textContent = nextDescription;
    document.querySelector('meta[name="description"]')?.setAttribute('content', nextDescription);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', nextDescription);
    document.querySelector('meta[property="og:locale"]')?.setAttribute('content', isEnglish ? 'en_US' : 'tr_TR');

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (isEnglish) url.searchParams.set('lang', 'en');
      else url.searchParams.delete('lang');
      window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
    }
  };

  const requestedLanguage = new URLSearchParams(window.location.search).get('lang');
  setLanguage(requestedLanguage, false);

  toggle.addEventListener('click', () => {
    setLanguage(document.documentElement.lang === 'en' ? 'tr' : 'en');
  });
})();
