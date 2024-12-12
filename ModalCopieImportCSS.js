// Récupérer les éléments
const openModalBtn = document.querySelector(".open-modal-btn-import-css");
const modal = document.getElementById("codeModal-import-css");
const closeModalBtn = modal.querySelector(".close-btn-import-css");
const copyBtn = modal.querySelector(".copy-btn-import-css");
const codeBlock = modal.querySelector("#code-block-import-css");

// Ouvrir la modale
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Fermer la modale
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Copier le contenu du code
copyBtn.addEventListener("click", () => {
  const codeToCopy = codeBlock.textContent;
  navigator.clipboard
    .writeText(codeToCopy)
    .then(() => {
      alert("Code copié dans le presse-papiers !");
    })
    .catch(() => {
      alert("Échec de la copie du code.");
    });
});

// Fermer la modale si on clique à l'extérieur
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
