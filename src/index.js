import './style.css';
import createHomePage from './homePage.js';
import createMenuPage from './menuPage.js';

const navButtons = document.querySelectorAll('button');

navButtons.forEach((button) => {
    
    button.addEventListener("click", () => {
        navButtons.forEach((btn) => {
            btn.style.backgroundColor = "#a46b51ff";
        })
        if (button.textContent === 'Home') {
            createHomePage();
        } else if (button.textContent === 'Menu') {
            createMenuPage();
        }
        button.style.backgroundColor = "#c28e76ff";
    })
})

// Default Page
createHomePage();