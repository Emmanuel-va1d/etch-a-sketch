window.onload = () => {
    const container = document.querySelector("#container");
    let grid = [];
    for (let i = 0; i < 16; i++) {
        grid[i] = [];
        for (let j = 0; j < 16; j++) {
            const side = 500 / 16;
            grid[i][j] = document.createElement("div");
            grid[i][j].classList.add("grid-item");
            grid[i][j].classList.add(`r-${i + 1}c-${j + 1}`);
            grid[i][j].style.width = `${side}px`;
            grid[i][j].style.height = `${side}px`;
            container.appendChild(grid[i][j]);
        }
    }
    const divs = document.querySelectorAll(".grid-item");

    divs.forEach(cell => cell.addEventListener("mouseover", () => cell.style.backgroundColor = "black"));
};