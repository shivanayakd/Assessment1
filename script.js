// Check if HTML document is completely Loaded and Parsed
document.addEventListener("DOMContentLoaded", function (event) {
  // Dom Selectors
  const toggle = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const contentbtn = document.querySelector("#add");
  const content = document.querySelector("#content");
  const items = document.querySelectorAll(".item");
  const subitems = document.querySelectorAll(".subitem");

  // Text Constant
  const LOREM =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ullamcorper sit amet risus nullam eget felis eget. Risus nullam eget felis eget. Quis varius quam quisque id. Vestibulum mattis ullamcorper velit sed ullamcorper morbi. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Cras sed felis eget velit aliquet sagittis id consectetur purus. Suspendisse in est ante in nibh mauris. Nunc non blandit massa enim nec. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Elementum tempus egestas sed sed risus. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Libero enim sed faucibus turpis in eu mi bibendum neque. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Placerat vestibulum lectus mauris ultrices. Tincidunt id aliquet risus feugiat in ante metus dictum at.Sit amet purus gravida quis blandit turpis cursus in hac.";

  // Toggle mobile menu
  function toggleMenu() {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");

      // adds the menu (hamburger) icon
      toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
      menu.classList.add("active");

      // adds the close (x) icon
      toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
  }

  // Event Listener
  toggle.addEventListener("click", toggleMenu, false);

  // Activate Submenu
  function toggleItem() {
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }

  // alert Submenu
  function alertMe() {
    alert(this.textContent);
  }

  // Event Listeners
  for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }
  }

  for (let subitem of subitems) {
    subitem.addEventListener("click", alertMe, false);
  }

  // Close Submu From Anywhere
  function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }

  // Event listener
  document.addEventListener("click", closeSubmenu, false);

  function addContent() {
    let node = document.createElement("p");
    let textnode = document.createTextNode(LOREM);
    node.appendChild(textnode);
    content.appendChild(node);
  }

  // Add content
  contentbtn.addEventListener("click", addContent, false);
});
