window.onload = () => {
    const container = document.querySelector("#container");
    let grid = [];
    for (let i = 0; i < 16; i++) {
        grid[i] = [];
        for (let j = 0; j < 16; j++) {
            grid[i][j] = document.createElement("div");
            grid[i][j].classList.add("grid-item");
            grid[i][j].classList.add(`r-${i + 1}c-${j + 1}`);
            container.appendChild(grid[i][j]);
        }
    }
    const divs = document.getElementsByClassName("grid-item");

    divs.addEventListener("mouseover", () => divs.style.backgroundColor = "white");
    divs.addEventListener("mouseout", () => divs.style.backgroundColor = "gray");
};