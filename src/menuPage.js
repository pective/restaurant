import schabowy from "./assets/dishes/schabowy.jpg";
import nalesnik from "./assets/dishes/nalesnik.jpg";
import pomidorowa from "./assets/dishes/pomidorowa.jpg";
import szczawiowa from "./assets/dishes/szczawiowa.jpg";
import leniwe from "./assets/dishes/leniwe.jpg";

function createItem(name, description, image) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemPhoto = document.createElement("img");
    itemPhoto.src = image;

    const itemName = document.createElement("h2");
    itemName.classList.add("item-name");
    itemName.textContent = name;

    const itemDesc = document.createElement("p");
    itemDesc.classList.add("item-desc");
    itemDesc.textContent = description;

    menuItem.appendChild(itemPhoto);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDesc);

    return menuItem;
}

function createMenuPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const menuContaier = document.createElement("div");
    menuContaier.classList.add("menu-container");

    const menuText = document.createElement("h1");
    menuText.textContent = "Our Menu";
    menuText.classList.add("menu-text");

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    const itemList = [
        createItem("Kotlet Schabowy", "Kotlet ze schabu w panierce", schabowy),
        createItem("Naleśniki", "Naleśniki z serem", nalesnik),
        createItem("Pomidorowa", "Zupa pomidorowa podana z makaronem", pomidorowa),
        createItem("Szczawiowa ", "Zupa szczawiowa z jajkiem", szczawiowa),
        createItem("Kluski leniwe ", "Kluski leniwe z bułką tartą", leniwe),
    ];
    

    menuContaier.appendChild(menuText);
    itemList.forEach((item) => {
        menuGrid.appendChild(item);
    })
    menuContaier.appendChild(menuGrid);
    content.appendChild(menuContaier);
}

export default createMenuPage;