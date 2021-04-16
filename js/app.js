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


const navbar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');



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

function navbarBuilder() {

    //loops over the sections to create the navbar with the title from every section
    sections.forEach(section => {

        const title = section.dataset.nav;
        const listItem = document.createElement("li");
        const link = document.createElement("div");

        //for the link scrolls to the appropriate section with smooth behavior
        link.addEventListener('click', () => {
           section.scrollIntoView({ behavior: "smooth" });
        });

        // creates a class for each link (to be used in makeSectionActive function to highlight the active item)    
        link.classList.add(`navbar__link__${section.id}`);

        //appending everything
        link.appendChild(document.createTextNode(title));
        listItem.appendChild(link);
        navbar.appendChild(listItem);

    });
};

//highlights the active section by adding the class called "your-active-class" for sections and the class "active" in the navbar
function makeSectionActive() {
    for (const section of sections) {
        
        const sectionInfos = section.getBoundingClientRect();
        if (sectionInfos.top <= 150 && sectionInfos.bottom >= 150) {
            section.classList.add("your-active-class");
            document.querySelector(`.navbar__link__${section.id}`).classList.add("active");
        } else {
            section.classList.remove("your-active-class");
            document.querySelector(`.navbar__link__${section.id}`).classList.remove("active");
        }
    }
}


/**
 * End Main Functions
 * Begin Events
 *
*/


// Listen to scroll to make sections active
document.addEventListener("scroll", () => {
    makeSectionActive();
});

// build the navbar when the page loads
document.body.onload = navbarBuilder()