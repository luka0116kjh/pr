
document.getElementById('year').textContent = new Date().getFullYear();


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = 'LIGHT';
} else {
  themeToggle.textContent = 'DARK';
}


themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    themeToggle.textContent = 'LIGHT';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'DARK';
    localStorage.setItem('theme', 'light');
  }
});


const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);


document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});


const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  

  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


const schoolButtons = document.querySelectorAll('.school-btn');
const schoolCards = document.querySelectorAll('.school-card');


let expandedStates = [false, false]; // [내부활동, 외부활동]

schoolButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {

    expandedStates[index] = !expandedStates[index];
    
    if (expandedStates[index]) {

      schoolCards.forEach((card, i) => {
        if (i === index) {

          card.style.transform = 'scale(1.05)';
          card.style.opacity = '1';
          card.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.3)';
          card.style.zIndex = '10';
        } else {
 
          card.style.transform = 'scale(0.85)';
          card.style.opacity = '0.4';
        }
        card.style.transition = 'all 0.3s ease';
      });
      

      schoolButtons.forEach((b, i) => {
        if (i === index) {
          b.style.opacity = '1';
          b.style.transform = 'scale(1.1)';
        } else {
          b.style.opacity = '0.6';
          b.style.transform = 'scale(1)';
        }
      });
      

      schoolCards[index].scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      
    } else {
      // 축소 상태 (원래대로)
      schoolCards.forEach(card => {
        card.style.transform = 'scale(1)';
        card.style.opacity = '1';
        card.style.boxShadow = '';
        card.style.zIndex = '';
      });
      
      schoolButtons.forEach(b => {
        b.style.opacity = '1';
        b.style.transform = 'scale(1)';
      });
    }
  });
});


schoolCards.forEach(card => {
  card.style.transform = 'scale(1)';
  card.style.opacity = '1';
});


document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});


document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', function() {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('visible');
  }
});


console.log('🚀 Portfolio loaded successfully!');
