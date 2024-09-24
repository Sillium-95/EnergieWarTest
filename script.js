
// Variables
const menuItems = document.querySelectorAll(".menu-item");
const activeBackground = document.querySelector(".active-background .background-image");
let activeIndex;
const backgrounds = {
  2: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/ls/LSDF4YWJXM5I1575407576482.jpg",
  1: "https://store-images.s-microsoft.com/image/apps.5292.13835473807186336.9510cd97-f71a-49b0-9e5c-0877f4bc9de3.b5893ca4-bb2d-4329-9be4-41bb1829ee84?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
  0: "https://store-images.s-microsoft.com/image/apps.52829.14107985044965209.e8fed65f-093d-40d1-849f-6c564d2ad876.8fe14720-2b8f-4b9c-aebf-07f1610816d5?mode=scale&q=90&h=1080&w=1920"
}

const setActiveBackground = (index) => {
  for (const [key, value] of Object.entries(backgrounds)) {
    if (parseInt(key) === index) {
      activeBackground.style.backgroundImage = `url(${value})`
    }
  }
}

/**
Selects the menu item
@par - index: index of the selected item
**/
const selectItem = () => {
  for (let i = 0; i < menuItems.length; i++) {
    if (i === activeIndex) {
      menuItems[i].classList.add("active");
      setActiveBackground(i);
    } 
  }
}

const removeActive = () => {
  for (let i = 0; i < menuItems.length; i++) {
    if (i !== activeIndex) {
      menuItems[i].classList.remove("active");
    } 
  }
}

const next = () => {
  if (activeIndex === 2) {
    activeIndex = 0;
    removeActive();
    selectItem();
  } else {
    activeIndex++;
    removeActive();
    selectItem();
  }
}

const prev = () => {
  if (activeIndex === 0) {
    activeIndex = 2;
    removeActive();
    selectItem();
  } else {
    activeIndex--;
    removeActive();
    selectItem();
  }
}

// Eventlisteners
window.addEventListener("DOMContentLoaded", () => {
  activeIndex = 1;
  selectItem();
});
document.addEventListener("keydown", (event) => {
  if (event.keyCode === 39) {
    next();
  } else if (event.keyCode === 37) {
    prev();
  }
})

