document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  year.textContent = new Date().getFullYear();

  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  if (localStorage.getItem('theme') === 'dark') body.classList.add('dark');

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
    toggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Scroll animation using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});
