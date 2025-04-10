const boutons = document.querySelectorAll(".titre");
const modale = document.querySelector(".modale");

for (let i = 0; i < boutons.length; i++) {
    const bouton = boutons[i];

    bouton.addEventListener("click", OpenModale);
}

function OpenModale() {

    modale.classList.add("visible");
    modale.addEventListener("click", CloseModale);
    
}

function CloseModale() {

    modale.classList.remove("visible");

}