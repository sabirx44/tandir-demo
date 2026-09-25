import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

// ?qa disables motion so full-page review screenshots show every section at rest
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches || new URLSearchParams(location.search).has('qa');
const rtl = document.documentElement.dir === 'rtl';

if (reduced) {
  document.documentElement.classList.remove('js');
} else {
  if (document.body.hasAttribute('data-smooth')) {
    const lenis = new Lenis({ lerp: 0.085 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const el = document.querySelector<HTMLElement>(a.getAttribute('href')!);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el, { offset: -16 });
      });
    });
  }

  document.fonts.ready.then(() => {
    // Headlines rise line by line. Arabic is split by words only to keep letters joined.
    document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
      const split = SplitText.create(el, { type: rtl ? 'words,lines' : 'lines', mask: 'lines' });
      gsap.set(el, { visibility: 'visible' });
      const hero = el.closest('[data-hero]');
      gsap.from(split.lines, {
        yPercent: 105, duration: 1.2, ease: 'power4.out', stagger: 0.09, delay: hero ? 0.25 : 0,
        scrollTrigger: hero ? undefined : { trigger: el, start: 'top 85%', once: true },
      });
    });

    // Horizontal day timeline, pinned on wide screens
    const mm = gsap.matchMedia();
    mm.add('(min-width: 900px)', () => {
      const section = document.querySelector<HTMLElement>('[data-hscroll]');
      const track = section?.querySelector<HTMLElement>('[data-track]');
      if (!section || !track) return;
      const distance = () => track.scrollWidth - section.clientWidth;
      gsap.to(track, {
        x: () => (rtl ? distance() : -distance()),
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top top', end: () => `+=${distance()}`, pin: true, scrub: 0.8, invalidateOnRefresh: true },
      });
      const bar = section.querySelector<HTMLElement>('[data-progress]');
      if (bar) gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: section, start: 'top top', end: () => `+=${distance()}`, scrub: true } });
    });
    ScrollTrigger.refresh();
  });

  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 90%', once: true,
    onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.08 }),
  });

  // Hero photo: slow push-in on load, drift on scroll
  const heroImg = document.querySelector<HTMLElement>('[data-hero-img] img, [data-hero-img] .photo-ph');
  if (heroImg) {
    gsap.fromTo(heroImg, { scale: 1.18 }, { scale: 1.04, duration: 2.6, ease: 'power2.out' });
    gsap.to(heroImg, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true } });
  }

  document.querySelectorAll<HTMLElement>('[data-zoom] img').forEach((img) => {
    gsap.fromTo(img, { scale: 1.14 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } });
  });

  // Beads in the manifesto grow in as the sentence reaches them
  document.querySelectorAll<HTMLElement>('.bead').forEach((b) => {
    gsap.from(b, { width: 0, marginInline: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: b, start: 'top 85%', once: true } });
  });
}

// Kazan status: plov is served 12:00–15:00 Tashkent time (demo logic)
document.querySelectorAll<HTMLElement>('[data-kazan]').forEach((el) => {
  const texts = JSON.parse(el.dataset.kazan!);
  const update = () => {
    const parts = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Tashkent' }).formatToParts(new Date());
    const h = Number(parts.find((p) => p.type === 'hour')!.value);
    const m = Number(parts.find((p) => p.type === 'minute')!.value);
    const mins = h * 60 + m;
    let text = texts.after;
    if (mins >= 7 * 60 && mins < 12 * 60) text = texts.before;
    else if (mins >= 12 * 60 && mins < 15 * 60) text = texts.serving.replace('{n}', String(Math.max(6, Math.round(120 - (mins - 720) * 0.6))));
    else if (mins < 7 * 60) text = texts.before;
    el.textContent = text;
  };
  update();
  setInterval(update, 60000);
});

// Live clock
document.querySelectorAll<HTMLElement>('[data-clock]').forEach((el) => {
  const fmt = new Intl.DateTimeFormat(document.documentElement.lang === 'ar' ? 'ar' : 'ru-RU', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: el.dataset.clock });
  const tick = () => (el.textContent = fmt.format(new Date()));
  tick();
  setInterval(tick, 1000);
});
