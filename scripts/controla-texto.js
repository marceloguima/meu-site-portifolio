const texto = document.getElementById("texto-oculto");
const botaoLerMais = document.querySelector(".btn-ler-mais");

const mostraTexto = () => {
    texto.classList.toggle("active");
    if (botaoLerMais.textContent === "Ler mais") {
        botaoLerMais.textContent = "Ler menos";
    } else {
        botaoLerMais.textContent = "Ler mais";
    }
};

botaoLerMais.addEventListener("click", () => {
    mostraTexto();
});
