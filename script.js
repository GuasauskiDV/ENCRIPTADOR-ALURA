var botonEncriptar = document.querySelector(".button-encri");
var botonDesencriptar = document.querySelector(".button-desin");
var contenedor = document.querySelector(".priparrafo");
var resultado = document.querySelector(".textofinal");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".text-area");
    return cajatexto.value;
}

function ocultarAdelante(){
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "ei"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "iesi"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "oiwopa"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "uifiu"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+1;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+5;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+4;
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }

    return textoFinal;
}

const buttonCopiar = document.querySelector(".button-copiar");
    buttonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".priresultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})