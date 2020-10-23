
function convertSize(x) {
    if (x == 1) {
        return 4;
    } else if (x == 2) {
        return 16; 
    } else if (x == 3) {
        return 32;
    } else {
        return 64;
    }
}


/*const size = 16*/
const container = document.querySelector("#container");






var slider = document.getElementById("mySlider");




    

slider.addEventListener("input", function() {

    var node = document.getElementById('mySlider');
    node.innerHTML = "";

    var guideValue = event.target.value;
    console.log(guideValue);
    
    for (i = 1; i <= convertSize(guideValue); i++) {
        const cell = document.createElement("pen"); 
        cell.addEventListener('mouseover', hoverColor);
        cell.innerHTML = ``;
        cell.setAttribute("id", `${i}`)
        container.appendChild(cell);
    };

    



});

function hoverColor($event) {
    const item = $event.target;
    item.style.opacity = `0`;
  }