const menu = document.querySelector(".menu");
const botaoMenu = document.querySelector(".btn-menu");
const iconeMenu = document.querySelector(".fa-solid");
const overlayParaMenu = document.querySelector(".overlay");
const linksMenuMobile = document.querySelectorAll(".link")


botaoMenu.addEventListener("click", () => {
    trocaIcone();
    showMenu();
});

const trocaIcone = () => {
    if (iconeMenu.classList.contains("fa-bars")) {
        iconeMenu.classList.remove("fa-bars");
        iconeMenu.classList.add("fa-xmark");
    } else {
        iconeMenu.classList.remove("fa-xmark");
        iconeMenu.classList.add("fa-bars");
    }
};

const showMenu = () => {
    menu.classList.toggle("active");
    // overlayParaMenu.classList.toggle("active")
};


// tira o menu mobile quando escolher uma opção
linksMenuMobile.forEach(element => {
    element.addEventListener("click", ()=>{
        showMenu()
        trocaIcone()
    })
});