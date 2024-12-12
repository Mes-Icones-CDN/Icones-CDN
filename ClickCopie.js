function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Texte copié : " + text);

      // Ajouter un effet visuel
      const div = document.querySelector(".icon-P_Blanc_plein");
      div.classList.add("copied");
      setTimeout(() => div.classList.remove("copied"), 500); // Retirer l'effet
    })
    .catch((err) => {
      console.error("Échec de la copie : ", err);
    });
}
