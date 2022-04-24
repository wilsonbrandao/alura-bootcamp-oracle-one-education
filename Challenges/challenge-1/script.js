var input = document.querySelector("input");
var aside = document.querySelector("aside");
var paragraph = document.getElementById("paragraph");
var copySet = true;

var StringTransformedText = '';
var divAside = document.getElementById("aside-standard");
input.focus();

function Criptografar () {
    var arrayText = input.value.split("");
    var ArrayTextTransformed = [];
    buttonCopy.style.display = "flex";
    
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
    divAside.style.display = "none";
    paragraph.textContent = StringTransformedText;
    paragraph.style.display = "block";
    copySet = true;

}

function Descriptografar () {
    var StringEncrypted = input.value;
    var StringDecrypted = "";

    
    StringDecrypted = StringEncrypted.replace(/ai/g, "a");
    StringEncrypted = StringDecrypted;
    
    StringDecrypted = StringEncrypted.replace(/enter/g, "e");
    StringEncrypted = StringDecrypted;
    
    StringDecrypted = StringEncrypted.replace(/imes/g, "i");
    StringEncrypted = StringDecrypted;
    
    StringDecrypted = StringEncrypted.replace(/ober/g, "o");
    StringEncrypted = StringDecrypted;
    
    StringDecrypted = StringEncrypted.replace(/ufat/g, "u");
    StringEncrypted = StringDecrypted;
  
    divAside.style.display = "none";
    paragraph.textContent = StringDecrypted;
    paragraph.style.display = "block";
    copySet = false;
}

input.onclick = () => {
    if (divAside.style.display == "none"){
        divAside.style.display = "block";
        paragraph.textContent = "";
        paragraph.style.display = "none";
    }
}

var buttonEncrypt = document.getElementById("button-encrypt");
buttonEncrypt.onclick = Criptografar;

var buttonDecrypt = document.getElementById("button-decrypt");
buttonDecrypt.onclick = Descriptografar;

var buttonCopy = document.getElementById("button-copy");


function Copy (){
    if(copySet){
        navigator.clipboard.writeText(StringTransformedText);
    }else{
        navigator.clipboard.writeText(StringDecrypted);
    }
}
buttonCopy.onclick = Copy;