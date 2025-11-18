// script.js

// 현재 년도 자동 업데이트
document.getElementById('year').textContent = new Date().getFullYear();

// 다크모드 토글
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// 로컬스토리지에서 테마 불러오기
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = 'LIGHT';
} else {
  themeToggle.textContent = 'DARK';
}

// 테마 토글 버튼 클릭 이벤트
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

// Intersection Observer로 스크롤 애니메이션
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

// 모든 fade-in 요소 관찰
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// 네비게이션 스크롤 효과
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // 스크롤 다운시 네비게이션 숨기기 (선택사항)
  if (currentScroll > lastScroll && currentScroll > 80) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});

// 부드러운 스크롤 (이미 CSS에 있지만 JS로도 추가 가능)
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

// 학교 활동 버튼 토글 기능 ⭐ 수정된 부분
const schoolButtons = document.querySelectorAll('.school-btn');
const schoolCards = document.querySelectorAll('.school-card');

// 각 카드의 확대 상태를 저장
let expandedStates = [false, false]; // [내부활동, 외부활동]

schoolButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // 현재 버튼에 해당하는 카드의 상태를 토글
    expandedStates[index] = !expandedStates[index];
    
    if (expandedStates[index]) {
      // 확대 상태
      schoolCards.forEach((card, i) => {
        if (i === index) {
          // 클릭한 카드 확대
          card.style.transform = 'scale(1.05)';
          card.style.opacity = '1';
          card.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.3)';
          card.style.zIndex = '10';
        } else {
          // 다른 카드는 축소
          card.style.transform = 'scale(0.85)';
          card.style.opacity = '0.4';
        }
        card.style.transition = 'all 0.3s ease';
      });
      
      // 버튼 스타일
      schoolButtons.forEach((b, i) => {
        if (i === index) {
          b.style.opacity = '1';
          b.style.transform = 'scale(1.1)';
        } else {
          b.style.opacity = '0.6';
          b.style.transform = 'scale(1)';
        }
      });
      
      // 스크롤 이동
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

// 초기 상태: 모든 카드 보이기
schoolCards.forEach(card => {
  card.style.transform = 'scale(1)';
  card.style.opacity = '1';
});

// 프로젝트 카드 호버 효과 강화 (선택사항)
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});

// 스킬 카드 클릭시 효과 (선택사항)
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('click', function() {
    // 클릭 애니메이션
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

// 페이지 로드 완료 후 히어로 섹션 애니메이션
window.addEventListener('load', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.classList.add('visible');
  }
});

console.log('🚀 Portfolio loaded successfully!');