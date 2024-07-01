document.addEventListener('DOMContentLoaded', () => {
  if (typeof Darkmode === 'undefined') {
    return;
  }

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
    saveInCookies: false,
    autoMatchOsTheme: false
  };
  
  const darkmode = new Darkmode(options);
  
  window.toggleDarkMode = function () {
    darkmode.toggle();
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem('theme', targetTheme);
  
    const githubCommentFrame = document.querySelector('.utterances-frame');

    const themeIcon = document.getElementById('theme-icon');
    if (targetTheme === "dark") {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      
      if (githubCommentFrame) {
        githubCommentFrame.contentWindow.postMessage({
          type: 'set-theme',
          theme: 'github-dark'
        }, 'https://utteranc.es');
      }
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      
      if (githubCommentFrame) {
        githubCommentFrame.contentWindow.postMessage({
          type: 'set-theme',
          theme: 'github-light'
        }, 'https://utteranc.es');
      }
    }
  };
  
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