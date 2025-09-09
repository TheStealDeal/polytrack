const controls = document.getElementById('controls-bar');
const button = document.getElementById('fullscreen-btn');

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
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
