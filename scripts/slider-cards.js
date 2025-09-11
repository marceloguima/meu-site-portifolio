const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".prev")
const containerCards = document.querySelector(".cards")

nextBtn.addEventListener("click", () => {
    containerCards.scrollLeft += 400
})

prevBtn.addEventListener("click", () => {
    containerCards.scrollLeft -= 400
})