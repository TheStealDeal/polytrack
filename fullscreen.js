const controls = document.getElementById('controls-bar');
const button = document.getElementById('fullscreen-btn');

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    const el = document.documentElement;
    const request =
      el.requestFullscreen ||
      el.webkitRequestFullscreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen;

    if (request) {
      try {
        const result = request.call(el);
        if (result && typeof result.catch === 'function') {
          result.catch(() => {
            if (window !== window.parent) {
              window.parent.postMessage({ type: 'fullscreen-request' }, '*');
            }
          });
        }
      } catch (e) {
        if (window !== window.parent) {
          window.parent.postMessage({ type: 'fullscreen-request' }, '*');
        }
      }
    }
  } else {
    const exit =
      document.exitFullscreen ||
      document.webkitExitFullscreen ||
      document.mozCancelFullScreen ||
      document.msExitFullscreen;
    if (exit) {
      exit.call(document);
    }
  }
}

button.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    controls.style.display = 'none';
  } else {
    controls.style.display = 'flex';
  }
});

window.addEventListener('message', (event) => {
  if (event && event.data && event.data.type === 'fullscreen-change') {
    controls.style.display = event.data.active ? 'none' : 'flex';
  }
});
