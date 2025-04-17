function toggleEnvelope() {
  const envelope = document.getElementById('envelope');
  const btn = document.getElementById('toggleBtn');
  const message = document.getElementById('message');

  envelope.classList.toggle('open');

  btn.textContent = envelope.classList.contains('open')
    ? 'Cerrar esta carta de amor'
    : 'Abrir esta carta de amor';
}

