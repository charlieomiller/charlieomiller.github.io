function insertRandomMessage(containerId, messages, className = 'randomMessage') {
    const container = document.getElementById(containerId);
    if (!container || !Array.isArray(messages) || messages.length === 0) return;
  
    const messageEl = document.createElement('div');
    messageEl.className = className;
    messageEl.textContent = messages[Math.floor(Math.random() * messages.length)];
    container.appendChild(messageEl);
  }
  