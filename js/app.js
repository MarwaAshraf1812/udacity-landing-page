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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

// Start define Global Variables
const navBar = document.querySelector(".navbar__menu");
const navList = document.querySelector("#navbar__list");
// i used the Array function to using for of loop
const sections = Array.from(document.querySelectorAll("section"));

// Build the navBar
function buildList() {
  sections.map((section) => {
    console.log(section);
    //Create the LI list that contained inside the UL list
    const listItem = document.createElement("li");
    const liAtr = document.createAttribute("className");
    listItem.className = "links";
    listItem.setAttributeNode(liAtr);
    //Create the 'A' contained links (sections)
    const listNav = document.createElement("a");
    //Append listNav to listItem
    listItem.appendChild(listNav);
    //Create a href contained sectionsLinks
    listNav.setAttribute("href", `#${section.id}`);
    //Create a element that contained sections.text  by createTextNode
    const txt = document.createTextNode(`${section.dataset.nav}`);
    //Append the txt in listNav
    listNav.appendChild(txt);
    //Create a listAtr element  that contained a className of sections
    const listAtr = document.createAttribute("className");
    listNav.className = "menu__link";
    listNav.setAttributeNode(listAtr);
    //Append listAtr in navList
    navList.appendChild(listItem);

    listItem.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    });
  });
  //Append the navList to the navBar
  navBar.appendChild(navList);
}

//function invoke
document.addEventListener("DOMContentLoaded", buildList);

//End the NavBar

// Start add class 'active' to section when near top of viewport
//Select all sections  using 'section ' by querySelectorAll function.
const inViewPort = (section) => {
  const elemPlace = Math.floor(section.getBoundingClientRect().top);
  return elemPlace < 250 && elemPlace >= -250;
};

// Add Active class and styles
const addActiveClass = (section) => {
  if (inViewPort(section)) {
    section.classList.add("your-active-class");
    section.style.cssText =
      "box-shadow:20px 20px 50px 15px #000000;border:2px solid #000;border-radius:2px";
    const sectionId = section.id.slice(7, 8) - 1;
    navList.childNodes[sectionId].style.cssText = "background-color:#000000;";
    navList.childNodes[sectionId].firstChild.style.cssText = "color: #ffffff;";
  }
};

// Remove Active class and styles
const removeActiveClass = (section) => {
  section.classList.remove("your-active-class");
  section.style.cssText = "box-shadow:none;border:none;border-radius:none";
  const sectionId = section.id.slice(7, 8) - 1;
  navList.childNodes[sectionId].style.cssText = "background-color:#ffffff;";
  navList.childNodes[sectionId].firstChild.style.cssText = "color: #000000;";
};

// Scroll Event Listener
document.addEventListener("scroll", (_) => {
  sections.map((section) => {
    removeActiveClass(section);
    addActiveClass(section);
  });
});

//End the class active style

/*  
//start goup button 
- I made a button when we click on it it shows the first page
- I used scroll effect in this part 
*/
const btn = document.getElementById("btn");

window.onscroll = function () {
  if (scrollY >= 400) {
    btn.style.display = "block";
  } else {
    if (scrollY <= 400) {
      btn.style.display = "none";
    }
  }
};

btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
//End  goup button
