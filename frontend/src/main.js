const statusEl = document.getElementById('status')

fetch('/api/health')
  .then((res) => res.json())
  .then((data) => {
    statusEl.textContent = `API status: ${data.status}`
  })
  .catch((err) => {
    statusEl.textContent = `Erreur: ${err.message}`
  })
