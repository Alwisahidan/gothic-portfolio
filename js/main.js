/* =========================
   DARK CINEMATIC SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  let delay = 0;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      if (!el.classList.contains('active')) {
        setTimeout(() => {
          el.classList.add('active');
        }, delay);
        delay += 120;
      }
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
