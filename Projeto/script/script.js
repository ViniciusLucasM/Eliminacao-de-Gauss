const button = document.querySelector("#button");
const span = document.querySelector("#span");

var prinbutton = document.querySelector(".buttonPrin");
var ordem;
var grid = document.querySelector(".grid");
var principal = document.querySelector(".Principal");
var container = document.querySelector(".grid-container");
var resu = document.querySelector(".resu");

prinbutton.addEventListener("click", function(e){
    ordem = document.querySelector("#valgrid").value;
    principal.removeAttribute("style");
    grid.style.display = "none";
    grids(ordem);
})

function grids(ordem){
    for (i = 0; i < ordem; i++) {
        for(x = 1; x - 1 < ordem; x++){
            let newdiv = document.createElement("div");
            let newinput = document.createElement("input");
            newdiv.setAttribute("class", "item");
            newinput.setAttribute("class", "input");
            newinput.setAttribute("type", "number");
            newinput.setAttribute("id", `l${x + i * ordem}`);
            container.appendChild(newdiv);
            newdiv.appendChild(newinput);
        }
        let newbr = document.createElement("br");
        container.appendChild(newbr);
    }

    for(j = 1; j - 1 < ordem; j++){
        let newdiv = document.createElement("div");
        let newinput = document.createElement("input");
        newdiv.setAttribute("class", "itemresu");
        newinput.setAttribute("class", "input");
        newinput.setAttribute("type", "number");
        newinput.setAttribute("id", `i${j}`);
        resu.appendChild(newdiv);
        newdiv.appendChild(newinput);
    }
}

var valores = [];
var valoresResu = [];


button.addEventListener("click", function(e) {
    e.preventDefault();
    
    let input = document.querySelectorAll(".input");
    
    input.forEach(function(element) {
        if(element.getAttribute("id").includes("l")){
            valores.push(element.value);
        }
    });

    input.forEach(function(element) {
        if(element.getAttribute("id").includes("i")){
            valoresResu.push(element.value);
        }
    });

    resultado.innerHTML = ``;
})

var resultado = document.querySelector("#span");