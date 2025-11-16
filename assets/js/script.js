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
