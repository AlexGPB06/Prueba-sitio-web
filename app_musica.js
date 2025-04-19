document.addEventListener('DOMContentLoaded', function() {
  // Selecciona TODOS los reproductores y aplica la lógica a cada uno
  document.querySelectorAll('.player-container1, .player-container2,.player-container3').forEach(player => {
    const audio = player.querySelector('audio');
    const playBtn = player.querySelector('.play-pause');
    const playIcon = playBtn.querySelector('i');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress-bar');
    const currentTimeElement = player.querySelector('.currentTime');
    const durationElement = player.querySelector('.duration');

    // Función para alternar play/pause
    function togglePlayPause() {
      if (audio.paused) {
        audio.play()
          .then(() => {
            playIcon.classList.replace('fa-play', 'fa-pause');
            playBtn.setAttribute('aria-label', 'Pausar');
          })
          .catch(error => console.error("Error al reproducir:", error));
      } else {
        audio.pause();
        playIcon.classList.replace('fa-pause', 'fa-play');
        playBtn.setAttribute('aria-label', 'Reproducir');
      }
    }

    // Actualizar progreso de la canción
    function updateProgress() {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = `${progressPercent}%`;
      currentTimeElement.textContent = formatTime(audio.currentTime);
      
      if (!isNaN(audio.duration)) {
        durationElement.textContent = formatTime(audio.duration);
      }
    }

    // Formatear tiempo (mm:ss)
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Event listeners
    playBtn.addEventListener('click', togglePlayPause);
    
    // Barra espaciadora y Enter para accesibilidad
    playBtn.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        togglePlayPause();
      }
    });

    audio.addEventListener('timeupdate', updateProgress);
    
    // Click en la barra de progreso
    progressBar.addEventListener('click', (e) => {
      const width = progressBar.clientWidth;
      const clickX = e.offsetX;
      audio.currentTime = (clickX / width) * audio.duration;
    });

    // Reiniciar al terminar la canción
    audio.addEventListener('ended', () => {
      playIcon.classList.replace('fa-pause', 'fa-play');
      progress.style.width = '0%';
      currentTimeElement.textContent = '0:00';
      playBtn.setAttribute('aria-label', 'Reproducir');
    });

    // Inicializar accesibilidad
    playBtn.setAttribute('aria-label', 'Reproducir');
  });
});
  // Evento click para play/pause
  playBtn.addEventListener('click', togglePlayPause);

  // Evento para la barra espaciadora y tecla Enter
  playBtn.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          togglePlayPause();
      }
  });

  // Actualizar progreso
  audio.addEventListener('timeupdate', updateProgress);

  function updateProgress() {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progress.style.width = `${progressPercent}%`;
      currentTime.textContent = formatTime(audio.currentTime);
      
      if (!isNaN(audio.duration)) {
          duration.textContent = formatTime(audio.duration);
      }
  }

  // Establecer progreso al hacer clic
  progressBar.addEventListener('click', (e) => {
      const width = progressBar.clientWidth;
      const clickX = e.offsetX;
      audio.currentTime = (clickX / width) * audio.duration;
  });

  // Formatear tiempo
  function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // Cuando termina la canción
  audio.addEventListener('ended', () => {
      playIcon.classList.replace('fa-pause', 'fa-play');
      progress.style.width = '0%';
      currentTime.textContent = '0:00';
      playBtn.setAttribute('aria-label', 'Reproducir');
  });

  // Botones de anterior/siguiente (funcionalidad básica)
  prevBtn.addEventListener('click', () => {
      audio.currentTime = 0;
      updateProgress();
  });

  nextBtn.addEventListener('click', () => {
      audio.currentTime = audio.duration;
      updateProgress();
  });

  // Mejorar accesibilidad
  playBtn.setAttribute('aria-label', 'Reproducir');
});

const audioFiles = {
    current: "assest/Musica/Blue Velvet [Dragon Ball GT] - Nattalia Sarria.mp3",
    // Puedes agregar más canciones aquí
    
};

const audio = document.getElementById('audio');
audio.src = audioFiles.current;
