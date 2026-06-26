(function fleksHeroResponsiveImage() {
  const desktop = 'uploads/processed/hero-epoxy-desktop.webp';
  const mobile = 'uploads/processed/hero-epoxy-mobile.webp';
  const alt = 'Premium glossy epoxy flakes floor installation in Kota Kinabalu by FLEKS';

  function polishHero() {
    const candidates = Array.from(document.images).filter((img) => {
      const text = `${img.alt || ''} ${img.src || ''}`.toLowerCase();
      const box = img.getBoundingClientRect();
      return (
        text.includes('epoxy') ||
        text.includes('stunning premium') ||
        (box.width > 420 && box.height > 260 && box.top < window.innerHeight * 1.2)
      );
    });

    const img = candidates.find((item) => {
      const box = item.getBoundingClientRect();
      return box.width > 300 && box.height > 220 && box.top < window.innerHeight * 1.4;
    });
    if (!img || img.dataset.fleksHeroDone === 'true') return false;

    const picture = document.createElement('picture');
    picture.dataset.fleksHeroPicture = 'true';
    picture.innerHTML = `
      <source media="(max-width: 760px)" srcset="${mobile}" type="image/webp">
      <source media="(min-width: 761px)" srcset="${desktop}" type="image/webp">
    `;

    const replacement = document.createElement('img');
    replacement.src = desktop;
    replacement.alt = alt;
    replacement.loading = 'eager';
    replacement.decoding = 'async';
    replacement.fetchPriority = 'high';
    replacement.width = 1400;
    replacement.height = 788;
    replacement.style.cssText = img.style.cssText;
    replacement.style.width = '100%';
    replacement.style.height = '100%';
    replacement.style.objectFit = 'cover';
    replacement.style.objectPosition = 'center center';
    replacement.dataset.fleksHeroDone = 'true';

    picture.appendChild(replacement);
    img.replaceWith(picture);

    const card = picture.closest('div');
    if (card) {
      card.style.background = '#eef7f5';
      card.style.overflow = 'hidden';
    }

    return true;
  }

  function boot() {
    let tries = 0;
    const timer = window.setInterval(() => {
      tries += 1;
      if (polishHero() || tries > 80) window.clearInterval(timer);
    }, 150);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
