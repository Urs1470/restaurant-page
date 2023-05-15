import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
  const content = document.querySelector("#content");
  const navBar = document.createElement("div");
  navBar.setAttribute("id", "navbar");

  // Create the three divs
  const div1 = document.createElement("button");
  const div2 = document.createElement("button");
  const div3 = document.createElement("button");

  // Set ids for the tabs
  div1.setAttribute("id", "home-btn");
  div2.setAttribute("id", "menu-btn");
  div3.setAttribute("id", "contact-btn");

  // Set classes for the tabs
  div1.setAttribute("class", "tab");
  div2.setAttribute("class", "tab");
  div3.setAttribute("class", "tab");

  // Set text content for the tabs
  div1.textContent = "Home";
  div2.textContent = "Menu";
  div3.textContent = "Contact";

  // Append the divs to the content div
  navBar.appendChild(div1);
  navBar.appendChild(div2);
  navBar.appendChild(div3);
  content.appendChild(navBar);

  // Add event listeners for tabs
  div1.addEventListener("click", () => {
    clearContent();
    createRestaurantHomePage();
  });
  div2.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });
  div3.addEventListener("click", () => {
    clearContent();
    createContactPage();
  });
};

function clearContent() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector(".page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}

export default createTabs;
