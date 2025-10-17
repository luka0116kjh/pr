document.addEventListener("DOMContentLoaded", () => {
  console.log("포트폴리오 페이지 로드 완료 ✅");

  setupDarkModeToggle();
  setupScrollAnimations(); // 예: 프로젝트 섹션에 fade-in 효과
});


// -----------------------------
// 2. 다크모드 토글
// -----------------------------
function setupDarkModeToggle() {
  const toggleButton = document.getElementById("darkModeToggle");

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");

      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
    }
  }
}


// -----------------------------
// 3. 스크롤 애니메이션 
function setupScrollAnimations() {
  const targets = document.querySelectorAll(".project-container");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.2,
  });

  targets.forEach(el => observer.observe(el));
}
