// VARIABLES GLOBALES
const btn = document.querySelectorAll(".comment-btn"); // ARRAY

btn.forEach(i => { // Método forEach
    // EVENTOS
    i.addEventListener('click', () => {
        // Suma +1 al dar click en el botón LIKE.
        let like = i.previousElementSibling.lastElementChild.textContent;
        let toNumberLikes = Number(like);
        toNumberLikes++;
        like = i.previousElementSibling.lastElementChild.textContent = toNumberLikes;
    });
})



