function togglePlayPause() {
  if (audio.paused) {
    audio.play()
      .then(() => {
        playIcon.classList.replace('fa-play', 'fa-pause');
        playBtn.setAttribute('aria-label', 'Pausar');
      })
      .catch(error => {
        console.error("Error al reproducir:", error);
        // Mostrar mensaje al usuario
        alert("No se puede reproducir el audio. Esto puede deberse a limitaciones del servidor.");
      });
  } else {
    audio.pause();
    playIcon.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('aria-label', 'Reproducir');
  }
}
