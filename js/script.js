// VARIABLES GLOBALES
const btn = document.querySelector(".comment-btn"); // Boton para dar Like

// EVENTOS
// Suma +1 al dar click en el botón LIKE.
btn.addEventListener('click', () => {
    let like = btn.previousElementSibling.lastElementChild.textContent;
    let toNumberLikes = Number(like);
    toNumberLikes++;
    like = btn.previousElementSibling.lastElementChild.textContent = toNumberLikes;
})

