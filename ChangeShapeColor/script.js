let colors = [
    "orange",
    "yellow",
    "cyan",
    "red",
    "green",
    "black",
    "voilet",
    "purple",
    "lightgreen",
    "blue",
    "magenta"
];

let shapes = [
    "triangle",
    "square",
    "rectangle",
    "circle",
    "diamond"
];

// get random color from color array
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// get random color from color array
function getRandomShape() {
    console.log(shapes[Math.floor(Math.random() * shapes.length)]);
    return shapes[Math.floor(Math.random() * shapes.length)];
}

let color = document.getElementById("change-color");

color.addEventListener("click", () => {
    let colorArea = document.getElementById("colorArea");
    colorArea.style.backgroundColor = getRandomColor();
});

let shape = document.getElementById("change-shape");

shape.addEventListener("click", () => {
    let shapeArea = document.getElementById("shapeArea");
    let randomShape = getRandomShape();

    if (randomShape === "triangle") {
        shapeArea.removeAttribute('style');
        shapeArea.style.height = '0px';
        shapeArea.style.width = '0px';
        shapeArea.style.borderLeft = "50px solid transparent";
        shapeArea.style.borderRight = "50px solid transparent";
        shapeArea.style.borderBottom = "100px solid #ffffff";
        shapeArea.style.backgroundColor = 'transparent';
    } else if (randomShape === "square") {
        shapeArea.removeAttribute('style');
        shapeArea.style.height = '100px';
        shapeArea.style.width = '100px';
        shapeArea.style.backgroundColor = 'white';
    } else if (randomShape === "rectangle") {
        shapeArea.removeAttribute('style');
        shapeArea.style.height = "50px";
        shapeArea.style.width = '100px';
        shapeArea.style.backgroundColor = 'white';
    } else if (randomShape === "circle") {
        shapeArea.removeAttribute('style');
        shapeArea.style.height = '100px';
        shapeArea.style.width = '100px';
        shapeArea.style.borderRadius = "50%";
        shapeArea.style.backgroundColor = 'white';
    } else if (randomShape === "diamond") {
        shapeArea.removeAttribute('style');
        shapeArea.style.width = '100px';
        shapeArea.style.height = '100px';
        shapeArea.style.transform = 'rotate(45deg)';
    }
})

document.getElementById("change-color").click();
document.getElementById("change-shape").click();
