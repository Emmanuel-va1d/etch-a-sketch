const container = document.querySelector("#container");
const btn = document.querySelector("button");

let size = 16;
let grid = [];

let createGrid = size => {
    
    for (let i = 0; i < size ** 2; i++) {
        const side = 600 / size;
        grid[i] = document.createElement("div");
        grid[i].classList.add("grid-item");
        grid[i].style.width = `${side}px`;
        grid[i].style.height = `${side}px`;
        container.appendChild(grid[i]);
    }
    const divs = document.querySelectorAll(".grid-item");
    divs.forEach(cell => cell.addEventListener("mouseover", () => cell.style.backgroundColor = "black"));

    btn.addEventListener("click", clear = () => {
        divs.forEach(cell => cell.remove());
        size = prompt("Size (4-100): ");
        if (size < 4 || size > 100)
            size = 4;
        createGrid(size);
    });
}

createGrid(size);