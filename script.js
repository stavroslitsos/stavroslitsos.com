// Header: solid background after scrolling past hero
const header = document.getElementById('siteHeader');
const toggleHeaderState = () => {
  header.classList.toggle('is-scrolled', window.scrollY > 80);
};
toggleHeaderState();
window.addEventListener('scroll', toggleHeaderState, { passive: true });

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  menuToggle.classList.toggle('is-open', isOpen);
  menuToggle.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', false);
    document.body.style.overflow = '';
  });
});

// Testimonial carousel
const track = document.getElementById('testimonialTrack');
const dotsWrap = document.getElementById('testimonialDots');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
const slides = Array.from(track.children);
let current = 0;
let autoplayTimer;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', `Vis sitat ${i + 1}`);
  dot.addEventListener('click', () => goTo(i));
  dotsWrap.appendChild(dot);
});
const dots = Array.from(dotsWrap.children);

function goTo(index) {
  slides[current].classList.remove('is-active');
  dots[current].classList.remove('is-active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('is-active');
  dots[current].classList.add('is-active');
}

function startAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => goTo(current + 1), 6000);
}

prevBtn.addEventListener('click', () => { goTo(current - 1); startAutoplay(); });
nextBtn.addEventListener('click', () => { goTo(current + 1); startAutoplay(); });

goTo(0);
startAutoplay();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
