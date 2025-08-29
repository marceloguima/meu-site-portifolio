const menu = document.querySelector(".menu");
const botaoMenu = document.querySelector(".btn-menu");
const iconeMenu = document.querySelector(".fa-solid");

botaoMenu.addEventListener("click", () => {
    trocaIcone();
    showMenu()
});

const trocaIcone = () => {
    if (iconeMenu.classList.contains("fa-bars")) {
        iconeMenu.classList.remove("fa-bars");
        iconeMenu.classList.add("fa-xmark");
    }else{
        iconeMenu.classList.remove("fa-xmark");
        iconeMenu.classList.add("fa-bars");
    }
};

const showMenu = ()=>{
    menu.classList.toggle("active")
}