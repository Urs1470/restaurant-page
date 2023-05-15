// Module for creating the menu page
const createMenuPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");
  const menuGrid = document.createElement("div");
  menuGrid.setAttribute("id", "menuGrid");

  // Create cells of the menu grid
  const cell1 = document.createElement("div");
  cell1.classList.add("cells");
  const icon1 = document.createElement("img");
  icon1.src =
    "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const meal1 = document.createElement("h3");
  meal1.textContent = "Pizza First Type";
  cell1.appendChild(icon1);
  cell1.appendChild(meal1);
  menuGrid.appendChild(cell1);

  const cell2 = document.createElement("div");
  cell2.classList.add("cells");
  const icon2 = document.createElement("img");
  icon2.src =
    "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const meal2 = document.createElement("h3");
  meal2.textContent = "Pizza Second Type";
  cell2.appendChild(icon2);
  cell2.appendChild(meal2);
  menuGrid.appendChild(cell2);

  const cell3 = document.createElement("div");
  cell3.classList.add("cells");
  const icon3 = document.createElement("img");
  icon3.src =
    "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const meal3 = document.createElement("h3");
  meal3.textContent = "Pizza Third Type";
  cell3.appendChild(icon3);
  cell3.appendChild(meal3);
  menuGrid.appendChild(cell3);

  const cell4 = document.createElement("div");
  cell4.classList.add("cells");
  const icon4 = document.createElement("img");
  icon4.src =
    "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const meal4 = document.createElement("h3");
  meal4.textContent = "Pizza Fourth Type";
  cell4.appendChild(icon4);
  cell4.appendChild(meal4);
  menuGrid.appendChild(cell4);

  pageContent.appendChild(menuGrid);
  content.appendChild(pageContent);
};

export default createMenuPage;
