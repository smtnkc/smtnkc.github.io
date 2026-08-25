(() => {
  const guidePaths = new Set([
    '/digital-entrepreneurship-guide/',
    '/dijital-girisimcilik-rehberi/'
  ]);
  let renderedPath = window.location.pathname;

  const slugify = (text) => text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const buildTableOfContents = () => {
    const headings = Array.from(document.querySelectorAll('.guide-content h2'))
      .filter((heading) => /^(?:[1-9]|10)\.\s/.test(heading.textContent.trim()))
      .slice(0, 10);

    headings.forEach((heading) => {
      if (!heading.id) heading.id = slugify(heading.textContent);
    });

    document.querySelectorAll('[data-guide-toc]').forEach((list) => {
      list.replaceChildren();
      headings.forEach((heading) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = heading.textContent;
        item.appendChild(link);
        list.appendChild(item);
      });
    });
  };

  const scrollToSection = (hash, behavior = 'smooth') => {
    if (!hash) return false;

    let sectionId;
    try {
      sectionId = decodeURIComponent(hash.slice(1));
    } catch (_) {
      return false;
    }

    const section = document.getElementById(sectionId);
    if (!section) return false;

    section.scrollIntoView({ behavior, block: 'start' });
    return true;
  };

  const copyAttribute = (current, next, name) => {
    const value = next.getAttribute(name);
    if (value === null) current.removeAttribute(name);
    else current.setAttribute(name, value);
  };

  const updateMetadata = (nextDocument) => {
    document.title = nextDocument.title;
    document.documentElement.lang = nextDocument.documentElement.lang;

    [
      'meta[name="description"]',
      'meta[property="og:locale"]',
      'meta[property="og:title"]',
      'meta[property="og:description"]',
      'meta[property="og:url"]'
    ].forEach((selector) => {
      const current = document.querySelector(selector);
      const next = nextDocument.querySelector(selector);
      if (current && next) copyAttribute(current, next, 'content');
    });

    const currentCanonical = document.querySelector('link[rel="canonical"]');
    const nextCanonical = nextDocument.querySelector('link[rel="canonical"]');
    if (currentCanonical && nextCanonical) copyAttribute(currentCanonical, nextCanonical, 'href');
  };

  const updateHeader = (nextDocument) => {
    const currentTheme = document.querySelector('[data-theme-toggle]');
    const nextTheme = nextDocument.querySelector('[data-theme-toggle]');
    if (currentTheme && nextTheme) {
      copyAttribute(currentTheme, nextTheme, 'data-label-dark');
      copyAttribute(currentTheme, nextTheme, 'data-label-light');

      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const label = isDark ? currentTheme.dataset.labelLight : currentTheme.dataset.labelDark;
      if (label) currentTheme.setAttribute('aria-label', label);

      const currentText = currentTheme.querySelector('.control-sr-only');
      const nextText = nextTheme.querySelector('.control-sr-only');
      if (currentText && nextText) currentText.textContent = nextText.textContent;
    }

    const currentLanguage = document.querySelector('.language-toggle');
    const nextLanguage = nextDocument.querySelector('.language-toggle');
    if (currentLanguage && nextLanguage) {
      ['href', 'hreflang', 'aria-label', 'title'].forEach((name) => {
        copyAttribute(currentLanguage, nextLanguage, name);
      });

      currentLanguage.querySelectorAll('[lang]').forEach((segment) => {
        const nextSegment = nextLanguage.querySelector(`[lang="${segment.lang}"]`);
        if (nextSegment?.hasAttribute('aria-current')) segment.setAttribute('aria-current', 'page');
        else segment.removeAttribute('aria-current');
      });
    }

    const currentMenu = document.querySelector('.guide-menu');
    const nextMenu = nextDocument.querySelector('.guide-menu');
    if (currentMenu && nextMenu) {
      currentMenu.replaceWith(document.importNode(nextMenu, true));
    }
  };

  const updateGuide = (nextDocument, url, addHistory) => {
    const destination = new URL(url, window.location.href);
    updateMetadata(nextDocument);
    updateHeader(nextDocument);

    const currentSkip = document.querySelector('.skip-link');
    const nextSkip = nextDocument.querySelector('.skip-link');
    if (currentSkip && nextSkip) currentSkip.textContent = nextSkip.textContent;

    const nextSidebar = nextDocument.querySelector('.guide-sidebar');
    const nextMain = nextDocument.querySelector('.guide-main');
    document.querySelector('.guide-sidebar')?.replaceWith(document.importNode(nextSidebar, true));
    document.querySelector('.guide-main')?.replaceWith(document.importNode(nextMain, true));

    buildTableOfContents();
    if (addHistory) window.history.pushState({}, '', url);
    renderedPath = destination.pathname;

    if (destination.hash) {
      window.requestAnimationFrame(() => scrollToSection(destination.hash, 'auto'));
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  };

  let navigationInProgress = false;

  const loadGuide = async (url, addHistory) => {
    if (navigationInProgress) return;
    navigationInProgress = true;
    document.querySelector('.language-toggle')?.setAttribute('aria-busy', 'true');

    try {
      const response = await window.fetch(url, { headers: { Accept: 'text/html' } });
      if (!response.ok) throw new Error(`Guide request failed with ${response.status}`);

      const nextDocument = new DOMParser().parseFromString(await response.text(), 'text/html');
      if (!nextDocument.querySelector('.guide-main') || !nextDocument.querySelector('.guide-sidebar')) {
        throw new Error('Guide response is incomplete');
      }

      updateGuide(nextDocument, url, addHistory);
    } catch (_) {
      window.location.assign(url);
    } finally {
      navigationInProgress = false;
      document.querySelector('.language-toggle')?.removeAttribute('aria-busy');
    }
  };

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const openMenu = document.querySelector('.guide-menu[open]');
    if (openMenu && !target?.closest('.guide-menu')) openMenu.removeAttribute('open');

    const languageToggle = target?.closest('.language-toggle');

    if (languageToggle) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const url = new URL(languageToggle.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      loadGuide(url.href, true);
      return;
    }

    const tocLink = target?.closest('[data-guide-toc] a');
    if (tocLink) {
      const url = new URL(tocLink.href, window.location.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash) {
        event.preventDefault();
        if (window.location.hash !== url.hash) window.history.pushState({}, '', url.hash);
        scrollToSection(url.hash);
        tocLink.closest('details')?.removeAttribute('open');
      }
    }
  });

  window.addEventListener('popstate', () => {
    if (!guidePaths.has(window.location.pathname)) return;

    if (window.location.pathname !== renderedPath) {
      loadGuide(window.location.href, false);
    } else if (window.location.hash) {
      scrollToSection(window.location.hash, 'auto');
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  });

  buildTableOfContents();
})();
