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
            sendYoutubeStyleRequest();
          });
        }
      } catch (e) {
        sendYoutubeStyleRequest();
      }
    } else {
      sendYoutubeStyleRequest();
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

function sendYoutubeStyleRequest() {
  if (window !== window.parent) {
    const message = JSON.stringify({
      event: 'command',
      func: 'toggleFullscreen',
      args: []
    });
    window.parent.postMessage(message, '*');
  }
}

button.addEventListener('click', toggleFullscreen);

document.addEventListener('fullscreenchange', () => {
  controls.style.display = document.fullscreenElement ? 'none' : 'flex';
});

window.addEventListener('message', (event) => {
  let data = event.data;
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (_) {
      data = null;
    }
  }
  if (data && data.event === 'infoDelivery' && data.info && 'fullscreen' in data.info) {
    controls.style.display = data.info.fullscreen ? 'none' : 'flex';
  }
});
