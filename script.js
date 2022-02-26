function colorGrid() {
    this.style.backgroundColor = "black";
}

//create n by n grid
function makeGrid () {
    document.documentElement.style.setProperty("--grid-rows", slider.value);
    for (i = 1; i <= slider.value * slider.value; i++) {
        element = document.createElement("div");
        elementNode.appendChild(element);
        element.className = "gridCell";
        element.addEventListener("mouseover", colorGrid);
        // element.innerHTML = i;
    }
}

function replaceGrid () {
    var currentGrid = document.querySelector("#gridContainer");
    var newGridContainer = document.createElement("div");
    newGridContainer.setAttribute("id", "gridContainer");
    document.documentElement.style.setProperty("--grid-rows", slider.value);
    for (i = 1; i <= slider.value * slider.value; i++) {
        newGrid = document.createElement("div");
        newGridContainer.appendChild(newGrid);
        newGrid.className = "gridCell";
        newGrid.addEventListener("mouseover", colorGrid);
        // newGrid.innerHTML = i;
    }
    currentGrid.parentNode.replaceChild(newGridContainer, currentGrid);
}

function resetGrid() {
    coloredGrid = document.querySelectorAll(".gridCell");
    coloredGrid.forEach(coloredGrid => {
        coloredGrid.style.backgroundColor = "white";
    })
}

var element = document.createElement("div");
element.setAttribute("id", "gridContainer");
document.body.appendChild(element);

var elementNode = document.getElementById("gridContainer");
var slider = document.getElementById("myRange");
var sliderId = document.getElementById("sliderId");
var output = document.getElementById("demo");

makeGrid();

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    sliderId.innerHTML = "Grid size: " + this.value + " x " + this.value;
    replaceGrid();
}

