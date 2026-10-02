const menuButton = document.querySelector('.menu');
const links = document.querySelector('.links');
const cartButton = document.querySelector('.cart');
const cartPopover = document.querySelector('.cart-pop');

menuButton.addEventListener('click', () => {
  const isOpen = links.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.links a').forEach((link) => link.addEventListener('click', () => links.classList.remove('open')));

cartButton.addEventListener('click', () => {
  cartPopover.hidden = !cartPopover.hidden;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
