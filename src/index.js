import './style.css';
import createHomePage from './homePage.js';
import createMenuPage from './menuPage.js';

const navButtons = document.querySelectorAll('button');

navButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent === 'Home') {
            createHomePage();
        } else if (button.textContent === 'Menu') {
            createMenuPage();
        }
    })
})

// Default Page
createHomePage();