(() => {
  const guidePaths = new Set(
    Array.from(document.querySelectorAll('link[rel="alternate"][hreflang]'))
      .map((link) => new URL(link.href, window.location.href).pathname)
  );
  guidePaths.add(window.location.pathname);
  let renderedPath = window.location.pathname;

  const slugify = (text) => text
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const buildTableOfContents = () => {
    const headings = Array.from(document.querySelectorAll('.guide-content h2'));

    headings.forEach((heading) => {
      if (!heading.id) heading.id = slugify(heading.textContent);
    });

    document.querySelectorAll('[data-guide-toc]').forEach((list) => {
      const isHamburgerMenu = Boolean(list.closest('.guide-menu__panel'));
      list.replaceChildren();
      headings.forEach((heading, index) => {
        const headingText = heading.textContent.trim();
        const numberedHeading = headingText.match(/^(\d+)\.\s*(.+)$/);
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.textContent = isHamburgerMenu && numberedHeading ? numberedHeading[2] : headingText;
        if (isHamburgerMenu) link.dataset.sectionNumber = numberedHeading?.[1] || String(index + 1);
        item.appendChild(link);
        list.appendChild(item);
      });
    });
  };

  const groupGuideSections = () => {
    const content = document.querySelector('.guide-content');
    if (!content) return;
    const isToolCatalog = document.body.classList.contains('guide-catalog-page');

    if (!Array.from(content.children).some((child) => child.classList.contains('guide-section'))) {
      let currentSection = null;
      Array.from(content.childNodes).forEach((node) => {
        const startsSection = node instanceof Element && (
          node.matches('h2') || (isToolCatalog && node.matches('table'))
        );

        if (!currentSection || startsSection) {
          currentSection = document.createElement('section');
          currentSection.className = 'guide-section';
          content.insertBefore(currentSection, node);
        }

        currentSection.appendChild(node);
      });
    }

    const introSection = content.querySelector('.guide-section');
    const introHeading = introSection && Array.from(introSection.children).find((child) => child.matches('h1'));
    let introHeader = introSection?.querySelector('.guide-intro__header');

    if (introSection && introHeading && !introHeader) {
      introHeader = document.createElement('div');
      introHeader.className = 'guide-intro__header';
      introSection.insertBefore(introHeader, introHeading);
      introHeader.appendChild(introHeading);
    }

    if (introSection && !introSection.querySelector('[data-guide-share]')) {
      const isTurkish = document.documentElement.lang.toLowerCase().startsWith('tr');
      const button = document.createElement('button');
      const icon = document.createElement('span');
      const label = document.createElement('span');
      button.className = 'guide-share';
      button.type = 'button';
      button.dataset.guideShare = '';
      button.dataset.defaultLabel = isTurkish ? 'Paylaş' : 'Share';
      button.dataset.copiedLabel = isTurkish ? 'Bağlantı kopyalandı' : 'Link copied';
      icon.className = 'guide-share__icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = '<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path> </svg>';
      label.dataset.guideShareLabel = '';
      label.textContent = button.dataset.defaultLabel;
      button.append(icon, label);
      (introHeader || introSection).appendChild(button);
    }
  };

  const wrapGuideTables = () => {
    const isTurkish = document.documentElement.lang.toLowerCase().startsWith('tr');
    const isToolCatalog = document.body.classList.contains('guide-catalog-page');

    document.querySelectorAll('.guide-content table').forEach((table) => {
      if (table.parentElement?.matches('.guide-table-scroll, .guide-tool-grid')) return;

      const wrapper = document.createElement('div');
      wrapper.className = isToolCatalog ? 'guide-tool-grid' : 'guide-table-scroll';
      if (!isToolCatalog) {
        wrapper.tabIndex = 0;
        wrapper.setAttribute('role', 'region');
        wrapper.setAttribute('aria-label', isTurkish ? 'Kaydırılabilir tablo' : 'Scrollable table');
      }
      table.before(wrapper);
      wrapper.appendChild(table);
    });
  };

  const prepareGuideContent = () => {
    buildTableOfContents();
    groupGuideSections();
    wrapGuideTables();
  };

  const closeGuideMenu = () => {
    document.querySelector('.guide-menu[open]')?.removeAttribute('open');
  };

  const copyText = async (value) => {
    if (navigator.clipboard?.writeText && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    if (!copied) throw new Error('Copy failed');
  };

  const shareGuide = async (button) => {
    const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href;
    const url = canonicalUrl || `${window.location.origin}${window.location.pathname}`;
    const title = document.querySelector('.guide-content h1')?.textContent.trim() || document.title;
    const text = document.querySelector('meta[name="description"]')?.content || '';

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (error) {
        if (error?.name === 'AbortError') return;
      }
    }

    try {
      await copyText(url);
      const label = button.querySelector('[data-guide-share-label]');
      if (label) label.textContent = button.dataset.copiedLabel;
      window.setTimeout(() => {
        if (button.isConnected && label) label.textContent = button.dataset.defaultLabel;
      }, 1600);
    } catch (_) {
      window.prompt(button.dataset.defaultLabel, url);
    }
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

    const scrollTarget = section.closest('.guide-section') || section;
    scrollTarget.scrollIntoView({ behavior, block: 'start' });
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
      'meta[property="og:url"]',
      'meta[property="og:image"]',
      'meta[name="twitter:title"]',
      'meta[name="twitter:description"]',
      'meta[name="twitter:image"]'
    ].forEach((selector) => {
      const current = document.querySelector(selector);
      const next = nextDocument.querySelector(selector);
      if (current && next) copyAttribute(current, next, 'content');
    });

    const currentCanonical = document.querySelector('link[rel="canonical"]');
    const nextCanonical = nextDocument.querySelector('link[rel="canonical"]');
    if (currentCanonical && nextCanonical) copyAttribute(currentCanonical, nextCanonical, 'href');

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((current) => {
      const hreflang = current.getAttribute('hreflang');
      const next = nextDocument.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (next) copyAttribute(current, next, 'href');
    });
  };

  const updateHeader = (nextDocument) => {
    const currentHome = document.querySelector('.guide-home');
    const nextHome = nextDocument.querySelector('.guide-home');
    if (currentHome && nextHome) {
      currentHome.replaceWith(document.importNode(nextHome, true));
    }

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

    prepareGuideContent();
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

  document.addEventListener('pointerdown', (event) => {
    const activeShareButton = document.activeElement;
    const target = event.target instanceof Element ? event.target : null;
    if (activeShareButton instanceof HTMLElement && activeShareButton.matches('[data-guide-share]') && !target?.closest('[data-guide-share]')) {
      activeShareButton.blur();
    }
  }, { passive: true });

  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const openMenu = document.querySelector('.guide-menu[open]');
    if (openMenu && !target?.closest('.guide-menu')) openMenu.removeAttribute('open');

    const shareButton = target?.closest('[data-guide-share]');
    if (shareButton) {
      event.preventDefault();
      shareGuide(shareButton);
      return;
    }

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
      closeGuideMenu();
      const url = new URL(tocLink.href, window.location.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash) {
        event.preventDefault();
        if (window.location.hash !== url.hash) window.history.pushState({}, '', url.hash);
        scrollToSection(url.hash);
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

  prepareGuideContent();
  if (window.location.hash) {
    window.requestAnimationFrame(() => scrollToSection(window.location.hash, 'auto'));
  }
})();
