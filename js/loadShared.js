document.addEventListener('DOMContentLoaded', () => {
  fetch('/partials/topbar.html')
    .then(response => {
      if (!response.ok) throw new Error('Network response FUCKED up');
      return response.text();
    })
    .then(data => {
      const container = document.getElementById('topbar');
      if (container) {
        const temp = document.createElement('div');
        temp.innerHTML = data;

        Array.from(temp.children).forEach(child => {
          if (child.tagName === 'SCRIPT') {
            const newScript = document.createElement('script');
            if (child.src) {
              newScript.src = child.src;
            } else {
              newScript.textContent = child.textContent;
            }
            document.body.appendChild(newScript);
          } else {
            container.appendChild(child);
          }
        });
      }
    })
    .catch(error => {
      console.error('um Um... Crap... Error loading topbar:', error);
    });
});
