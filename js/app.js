// these are the global navigation and section variables
const navbarMenu = document.getElementById("navbar__list");

const everySection = document.querySelectorAll("section");

// building the navigation

const navigationBuilder = () => {
    let navigation = "";

    // this will loop through each section
    everySection.forEach((section) => {
        const ID = section.id;
        const navigationData = section.dataset.nav;

        navigation += `<li><a class= "menu__link" href="#${ID}">${navigationData}</a></li>`;
    });
    navbarMenu.innerHTML = navigation;
};

navigationBuilder();

// gets largest value that is less than or equal to number
const set = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActiveClass = (section) => {
    section.classList.remove("your-active-class");
    section.style.cssText = "background-color: goldenrod";
};

// adds the active class
const addActiveClass = (conditional, section) => {
    if (conditional) {
        section.classList.add("your-active-class");
        section.style.cssText = "background-color: black";
    }
};

// function to add the active class
const activatingTheSection = () => {
    everySection.forEach((section) => {
        const elOffSet = set(section);

        inviewport = () => elOffSet < 100 && elOffSet >= -100;

        removeActiveClass(section);

        addActiveClass(inviewport(), section);
    });
};

window.addEventListener("scroll", activatingTheSection);

//Getting the button
const myButton = document.getElementById("myBtn");

// When user scrolls 20px down from the top
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// When you click on the button, it will take you to the top of the page.
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}