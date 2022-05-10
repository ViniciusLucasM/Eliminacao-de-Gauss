const button = document.querySelector("#button");
const span = document.querySelector("#span");

button.addEventListener("click", function(e) {
    e.preventDefault();
    const element = getelement("l1");
    const resu = element.value;
    span.innerHTML = `<p>${resu}</p>`;
})

function getelement(id){
    return document.querySelector(`#${id}`);
}