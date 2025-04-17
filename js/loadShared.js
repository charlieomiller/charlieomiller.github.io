// loadShared.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/topbar.html')
      .then(response => response.text())
      .then(html => {
        const container = document.getElementById('topbar-container');
        if (container) container.innerHTML = html;
      });
  });
  