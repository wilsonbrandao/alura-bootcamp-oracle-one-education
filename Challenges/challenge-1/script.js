var input = document.querySelector("input");
var aside = document.querySelector("aside");
var StringTransformedText = '';
var divAside = document.getElementById("aside-standard");
input.focus();

function Criptografar () {
    var arrayText = input.value.split("");
    var ArrayTextTransformed = [];
    var paragrath = document.createElement("p");
    paragrath.classList.add("paragraph-encrypted");
    
    arrayText.forEach(element => {
        if (element == "a"){
            ArrayTextTransformed.push("ai");
        }else if(element == "e"){
            ArrayTextTransformed.push("enter");
        }else if(element == "i"){
            ArrayTextTransformed.push("imes");
        }else if(element == "o"){
            ArrayTextTransformed.push("ober");
        }else if(element == "u"){
            ArrayTextTransformed.push("ufat");
        }else {
            ArrayTextTransformed.push(element);
        }
    });
    StringTransformedText = ArrayTextTransformed.join("");
    divAside.style.display = "none"
    aside.appendChild(paragrath);
    paragrath.appendChild(document.createTextNode(StringTransformedText));
}
/*
document.onclick = () =>  {
    if(input.value == "") divAside.style.display = "block";
}
*/


var buttonEncrypt = document.getElementById("button-encrypt");
    buttonEncrypt.onclick = Criptografar;