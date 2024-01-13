let toggled = false; 

let hTag = document.getElementsByTagName("h1")[0];
let bodyTag = document.getElementsByTagName("body")[0];
let circle = document.getElementById("circle");
let toggleContainer = document.getElementById("toggle-container");

toggleContainer.addEventListener("click", () => {
    if(!toggled) {
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.classList.add("dark-mode")

        toggled = true;
    } else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.classList.remove("dark-mode")

        toggled = false;
    }
})