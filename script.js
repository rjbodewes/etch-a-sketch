const size = 16
const container = document.querySelector("#container");




for (i = 1; i <= size; i++) {
    const cell = document.createElement("div"); 
    cell.innerHTML = `${i}`;
    container.appendChild(cell);
};s