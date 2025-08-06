import mapsPhoto from "./assets/maps.png";

function createAboutPage() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "About";

    const contactBox = document.createElement("div");
    contactBox.classList.add("contact-box");

    const contactBoxHeader = document.createElement("h1");
    contactBoxHeader.textContent = "Contact";

    const phoneNumber = document.createElement("h2");
    phoneNumber.textContent = "📞 +48 22 786 52 86";

    const emailAddress = document.createElement("h2");
    emailAddress.textContent = "✉️ barmalenki@gmail.com";

    const locationBox = document.createElement("div");
    locationBox.classList.add("location-box");

    const locationBoxHeader = document.createElement("h1");
    locationBoxHeader.textContent = "Location";

    const addressText = document.createElement("h2");
    addressText.textContent = "📍 Konstytucji 3 Maja 3, Radzymin, Poland";

    const addressPhoto = document.createElement("img");
    addressPhoto.src = mapsPhoto;


    contactBox.appendChild(contactBoxHeader);
    contactBox.appendChild(phoneNumber);
    contactBox.appendChild(emailAddress);
    
    locationBox.appendChild(locationBoxHeader);
    locationBox.appendChild(addressText);
    locationBox.appendChild(addressPhoto);
    
    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(contactBox);
    contactContainer.appendChild(locationBox);
    
    content.appendChild(contactContainer);
}

export default createAboutPage;