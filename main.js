const card = document.querySelector(".card__inner");
card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
});

const internetmsgElm = document.getElementById('internetmsg')

window.addEventListener('online', () => {
    internetmsgElm.classList.add('none')
})

window.addEventListener("offline", () => {
    internetmsgElm.classList.remove("none")
})