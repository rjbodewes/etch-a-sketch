const container = document.getElementById("container");
var slider = document.getElementById("mySlider");
const resetbtn = document.querySelector("#resetbtn");
const bnw = document.querySelector("#bnw");
var bg = "trump";




/*converts slider value to grid size*/
function convertSize(x) {
    if (x == 1) {
        return 2;
    } else if (x == 2) {
        return 4; 
    } else {
        return 8;
    };
};




/* some functions that are used a lot */
function clearAll(child) {
    while (child) { 
        container.removeChild(child); 
        child = container.lastElementChild; 
    };
};

function generateGrid(guideValue) {
    let side = 400;
    for (i = 1; i <= convertSize(guideValue)*convertSize(guideValue); i++) {
        const cell = document.createElement("pen"); 
        cell.addEventListener('mouseover', hoverColor);
        cell.innerHTML = ``;
        cell.setAttribute("id", `${i}`)
        container.appendChild(cell);
    };
    
    container.style.cssText ="grid-template-columns: repeat(auto-fill, minmax("+ side/convertSize(guideValue) +"px, 1fr)); grid-template-rows: repeat(auto-fill, minmax("+side/convertSize(guideValue)+"px, 1fr));"

}

function setBackground(bg) {
    if (bg == "trump") {
        return "url('Donald.jpg')";
    } else {
        return "url('Biden.jpg')";
    };
}

// determines the color of the background 
function changeColor() {
    if (document.getElementById("container").style.filter == `grayscale(100%)`) {
        document.getElementById("container").style.filter = ``;
    } else {
        document.getElementById("container").style.filter = `grayscale(100%)`
    }
};

/* generates the first grid*/
generateGrid(2);
container.style.backgroundImage = setBackground(bg);


/* when slider is changed*/
slider.addEventListener("input", function() {
    const container = document.querySelector("#container");
    var slider = document.getElementById("mySlider");

    var node = document.getElementById('mySlider');
    node.innerHTML = "";

    var guideValue = event.target.value;
    console.log(guideValue);
    
    var child = container.lastElementChild;  
    clearAll(child);
    
    
    generateGrid(guideValue);

    
    


});





function hoverColor($event) {
    const item = $event.target;
    
    item.style.opacity = `0`;
  }


resetbtn.addEventListener('click', function() {
    var child = container.lastElementChild;
    clearAll(child);
    generateGrid(2);
});

bnw.addEventListener('click', function() {
    changeColor();
});


/*checks radio value*/

var radios = document.forms["presidentForm"].elements["president"];
for(var i = 0, max = radios.length; i < max; i++) {
    radios[i].onclick = function() {
        var bg = this.value;
        console.log(bg);
        container.style.backgroundImage = setBackground(bg);
    };
}; 


