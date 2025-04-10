let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

let p = document.getElementById("paragrafo");

function verificar(){
    let digitado1 = parseFloat(num1.value);
    let digitado2 = parseFloat(num2.value);
    let digitado3 = parseFloat(num3.value);

    if (digitado1 > digitado2 && digitado3) {
        p.innerHTML = `${digitado1} é maior que ${digitado2} e ${digitado3} `;
    } 
        else if (digitado2 > digitado1 && digitado3) {
        p.innerHTML = `${digitado2} é maior que ${digitado1} e ${digitado3}`;
    }
        else if (digitado3 > digitado1 && digitado2) {
            p.innerHTML = `${digitado3} é maior que ${digitado1} e ${digitado2}`;
    } 
        else {
        p.innerHTML = `Os números ${digitado1} e ${digitado2} e ${digitado3}  são iguais`;
    }
}