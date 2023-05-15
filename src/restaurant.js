// restaurant.js

const createRestaurantHomePage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create and append image element
  const image = document.createElement("img");
  image.src =
    "https://images.pexels.com/photos/405202/pexels-photo-405202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  image.height = "300";
  pageContent.appendChild(image);

  // Create and append headline element
  const headLine = document.createElement("h1");
  headLine.textContent = "Welcome to our restaurant";
  pageContent.appendChild(headLine);

  // Create and append copy element
  const copy = document.createElement("p");
  copy.textContent = "We serve the best food in town.";
  pageContent.appendChild(copy);
  content.appendChild(pageContent);
};

export default createRestaurantHomePage;
