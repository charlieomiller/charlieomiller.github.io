// load-shared.js

function loadSharedHTML(selector, url) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        const container = document.querySelector(selector);
        if (container) container.innerHTML = data;
      })
      .catch(error => console.error(`Error loading ${url} into ${selector}:`, error));
  }
  
  // Load topbar
  loadSharedHTML('#topbar-container', '/topbar.html');