window.onload = () => {
    const container = document.querySelector("#container");
    let grid = [];
    for (let i = 0; i < 4; i++) {
        grid[i] = [];
        for (let j = 0; j < 4; j++) {
            grid[i][j] = document.createElement("div");
            grid[i][j].classList.add(`row-${i + 1}`);
            grid[i][j].classList.add(`col-${j + 1}`);
            container.appendChild(grid[i][j]);
        }
    }
};