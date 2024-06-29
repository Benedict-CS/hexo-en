document.addEventListener('DOMContentLoaded', () => {
    console.log("toggle-dark-mode.js loaded");
  
    // 检查Darkmode.js是否已加载
    if (typeof Darkmode === 'undefined') {
      console.error("Darkmode.js is not loaded");
      return;
    }
  
    // 初始化Darkmode.js选项
    const options = {
      bottom: '64px',
      right: '32px',
      left: 'unset',
      time: '0.3s',
      mixColor: 'transparent',
      backgroundColor: 'transparent',
      buttonColorDark: '#100f2c',
      buttonColorLight: '#fff',
      isActivated: true,
      saveInCookies: true,
      autoMatchOsTheme: false
    };
  
    // 手动切换模式
    window.toggleDarkMode = function () {
      console.log("toggleDarkMode called");
      const darkmode = new Darkmode(options);
      darkmode.toggle();
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const targetTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", targetTheme);
      localStorage.setItem('theme', targetTheme); // 保存到本地存储
  
      // 切换图标
      const themeIcon = document.getElementById('theme-icon');
      if (targetTheme === "dark") {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      }
    };
  
    // 在页面加载时应用保存的主题和图标
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  
    const themeIcon = document.getElementById('theme-icon');
    if (savedTheme === "dark") {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  });
  