// module for creating the contact page
const createContactPage = () => {
  const content = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create and adding header
  const header = document.createElement("h1");
  header.textContent = "Contact Us";
  pageContent.appendChild(header);

  // Create and adding a image
  const image = document.createElement("img");
  image.src =
    "https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  image.classList.add("images");
  pageContent.appendChild(image);

  // Create and adding contact information
  const email = document.createElement("p");
  email.textContent = "our.restaurant@email.com";
  pageContent.appendChild(email);

  const phone = document.createElement("p");
  phone.textContent = "+491666666666";
  pageContent.appendChild(phone);
  content.appendChild(pageContent);
};

export default createContactPage;
