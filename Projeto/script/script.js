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
var valores2 = [];

function separar(array, ordem) {
    var newValores = [[]];
    var grupoSepa = 0;
    for (var i = 0; i < array.length; i++) {
      if (newValores[grupoSepa] === undefined) {
        newValores[grupoSepa] = [];
      }

      newValores[grupoSepa].push(array[i]);

      if ((i + 1) % ordem === 0) {
        grupoSepa += 1;
      }
    }

    newValores.forEach(function(element, index){
        element.push(valoresResu[index]);
    });
    return newValores;
}


function conta(array, ordem){
    var column1 = []; 
    var numbers = [];
    var linha1 = [];
    var linha2 = [];
    var linha3 = [];
    var a = [];

    for(i = 0; i < array.length; i++){
        var numeros = array[i];
        for(x = 0; x < numeros.length; x++){
            if(numeros[x] == 0){
                console.log("AAAAAAA");
            }
        }
    }

    for(i = 0; i < array.length; i++){
        for(x = 0; x < array.length + 1; x++){
            column1[x] = array[i][x - array.length];
            if(column1[x] != undefined){
                numbers.push(column1[x]);
            }
        }
    }

    for(i = 0; i < numbers.length; i++){
        if(k == 0){
           var k = numbers[i + 1] / numbers[i];
        } 
        if(w == 0){
           var w = numbers[i + 2] / numbers[i];
        }
    }

    for(i = 0; i < array.length; i++){
        if(i == 0){
            for(x = 0; x < array[i].length; x++){
                linha1.push(array[i][x]);
            }
        } else if(i == 1){
            for(x = 0; x < array[i].length; x++){
                linha2.push(array[i][x]);
            }
        } else {
            for(x = 0; x < array[i].length; x++){
                linha3.push(array[i][x]);
            }
        }
    }

    for(i = 0; i < linha2.length; i++){
        i = 1;
        console.log(linha2[i]);
    }
}

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

    

    valores2 = separar(valores, ordem);
    conta(valores2, ordem);
    resultado.innerHTML = ``;
})

var resultado = document.querySelector("#span");