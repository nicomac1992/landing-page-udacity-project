/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

// navigation  variable
const navigation = document.getElementById("navbar__list");

// sections variable
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */


// building the navigation

const navBuild = () => {
    let navUI = "";
    // loops through all the sections
    sections.forEach((section) => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    });
    // appends elements to the navigation
    navigation.innerHTML = navUI;
};

navBuild();

// Add class 'active' to section when near top of viewport

// returns the largest value that's less or equal to the number
const offset = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// remove the active class
const removeActive = (section) => {
    section.classList.remove("your-active-class");
    section.style.cssText =
        "background-color: goldenrod";
};
// adds the active class
const addActive = (conditional, section) => {
    if (conditional) {
        section.classList.add("your-active-class");
        section.style.cssText = "background-color: black;";
    }
};

//implementation of the function

const sectionActivate = () => {
    sections.forEach((section) => {
        const elementOffset = offset(section);

        inviewport = () => elementOffset < 150 && elementOffset >= -150;

        removeActive(section);
        addActive(inviewport(), section);
    });
};

window.addEventListener("scroll", sectionActivate);

// Scroll to anchor ID using scrollTO event

const scrolling = () => {
    const links = document.querySelectorAll(".navbar__menu a");
    links.forEach((link) => {
        link.addEventListener("click", () => {
            for (i = 0; i < sections; i++) {
                sections[i].addEventListener("click", sectionScroll(link));
            }
        });
    });
};

scrolling();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active