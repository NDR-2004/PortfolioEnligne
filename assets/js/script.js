// Fonction pour forcer le téléchargement d'un fichier
function downloadFile(url) {
  const link = document.createElement('a');
  link.href = url;
  link.download = url.split('/').pop(); // récupère le nom du fichier automatiquement
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Fonction pour ouvrir le fichier dans un nouvel onglet
function openFile(url) {
  window.open(url, '_blank');
}

// --- Menu déroulant "Pro" ---

document.addEventListener('DOMContentLoaded', function () {
  var dropdown = document.querySelector('.dropdown');
  if (!dropdown) return;

  var btn = dropdown.querySelector('.dropbtn');
  if (!btn) return;

  // Ouvre / ferme le menu au clic sur "Pro"
  btn.addEventListener('click', function (e) {
    e.preventDefault(); // empêche le scroll en haut avec href="#"
    dropdown.classList.toggle('open');
  });

  // Ferme le menu si on clique ailleurs
  document.addEventListener('click', function (e) {
    // si on clique en dehors du dropdown, on ferme
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
});



