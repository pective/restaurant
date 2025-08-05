import logoImg from "./assets/logo.png"
function createHomePage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const header = document.createElement("div");
    header.classList.add("home-header");
    
    const name = document.createElement("h1");
    name.textContent = 'Bar "Maleńki"';

    const desc = document.createElement("p");
    desc.textContent = "We're a small restaurant located in Radzymin, serving traditional Polish meals since 1927.";

    const logo = document.createElement("img");
    logo.src = logoImg;

    header.appendChild(name);
    header.appendChild(desc);
    header.appendChild(logo);
    content.appendChild(header);
}

export default createHomePage;