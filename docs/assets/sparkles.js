const field = document.getElementById('sparkles');
if (field) {
  const colors = ['#ff6fd8', '#b7d88a', '#5ffbf1', '#ffd2ec'];
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('span');
    const size = 2 + Math.random() * 3;
    s.style.width = size + 'px';
    s.style.height = size + 'px';
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 100 + '%';
    s.style.background = colors[i % colors.length];
    s.style.boxShadow = '0 0 8px 2px ' + colors[i % colors.length];
    s.style.animationDelay = (Math.random() * 2.6) + 's';
    field.appendChild(s);
  }
}
