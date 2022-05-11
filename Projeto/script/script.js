const button = document.querySelector("#button");
const span = document.querySelector("#span");

button.addEventListener("click", function(e) {
    e.preventDefault();
    let valores = [];
    for(i = 1; i < 10; i++){
        const id = "l" + i.toString();
        for(x = 1; x < 10; x++){
            const element = getelement(id);
            const resu = element.value;
            if(valores.includes(resu) == false){
                valores.push(resu);
            }
        }
    }
    let B = 0;
    for(i = 0; i < 3; i++){
        B += parseInt(valores[i]);
    }
    console.log(B);
})

function getelement(id){
    return document.querySelector(`#${id}`);
}