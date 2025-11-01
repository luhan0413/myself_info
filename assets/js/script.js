document.addEventListener("DOMContentLoaded", function() {

  // --- 1. 載入 Header 並處理 Active 連結 ---
  fetch('./assets/header-nav.html')
    .then(res => res.text())
    .then(data => {
      const headerPlaceholder = document.querySelector("header");
      if (headerPlaceholder) {
        headerPlaceholder.innerHTML = data;
      }
      
      // 在 Header 載入後，執行 Active 連結的邏輯
      const navLinks = document.querySelectorAll('#mainNav a');
      const currentPage = window.location.pathname.split('/').pop();

      navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        // 處理首頁的特殊情況 (myweb.html 或 index.html)
        if ((currentPage === '' || currentPage === 'index.html' || currentPage === 'myweb.html') && linkPage === 'myweb.html') {
          link.classList.add('active');
        } else if (linkPage === currentPage) {
          link.classList.add('active');
        }
      });
    });

  // --- 2. 載入 Footer ---
  fetch("./assets/footer.html")
    .then(res => res.text())
    .then(data => {
      const footerPlaceholder = document.querySelector("footer");
      if (footerPlaceholder) {
        footerPlaceholder.innerHTML = data;
      }
    });

  // --- 3. 處理滑鼠光暈效果 ---
  // (您的原始碼，維持不變)
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      glow.style.opacity = 1;
    });

    document.addEventListener("mouseleave", () => {
      glow.style.opacity = 0;
    });

    function animateGlow() {
      glowX += (mouseX - glowX) * 0.1; 
      glowY += (mouseY - glowY) * 0.1;
      glow.style.left = `${glowX}px`;
      glow.style.top = `${glowY}px`;
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  // --- 4. 【新增】About Me 頁面的時間軸動畫 ---
  const timelineItems = document.querySelectorAll(".timeline-item");

  if (timelineItems.length > 0) {
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // 當元素的中心點進入視窗範圍時才觸發
      return (
        rect.top <= windowHeight * 0.8 &&
        rect.bottom >= windowHeight * 0.2
      );
    };

    const checkVisibility = () => {
      timelineItems.forEach(item => {
        if (isElementInViewport(item)) {
          // 進入視窗範圍，淡入
          item.classList.add("is-visible");
        } else {
          // 離開視窗範圍，淡出（移除 class）
          item.classList.remove("is-visible");
        }
      });
    };

    // 初始載入和滾動時持續檢查
    window.addEventListener("load", checkVisibility);
    window.addEventListener("scroll", checkVisibility);
    // 初始執行一次
    checkVisibility();
  }
});