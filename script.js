function encriptarTexto(texto) {
    const reglas = [
        { buscar: /e/g, reemplazar: "enter" },
        { buscar: /i/g, reemplazar: "imes" },
        { buscar: /a/g, reemplazar: "ai" },
        { buscar: /o/g, reemplazar: "ober" },
        { buscar: /u/g, reemplazar: "ufat" }
    ];

    return reglas.reduce((textoEncriptado, regla) => 
        textoEncriptado.replace(regla.buscar, regla.reemplazar), texto);
}

function desencriptarTexto(texto) {
    const reglas = [
        { buscar: /enter/g, reemplazar: "e" },
        { buscar: /imes/g, reemplazar: "i" },
        { buscar: /ai/g, reemplazar: "a" },
        { buscar: /ober/g, reemplazar: "o" },
        { buscar: /ufat/g, reemplazar: "u" }
    ];

    return reglas.reduce((textoDesencriptado, regla) => 
        textoDesencriptado.replace(regla.buscar, regla.reemplazar), texto);
}

function accionEncriptar() {
    const textoArea = document.querySelector(".encriptar");
    const texto = textoArea.value;
    const textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado, "encriptado");
    textoArea.value = "";
}

function accionDesencriptar() {
    const textoArea = document.querySelector(".encriptar");
    const texto = textoArea.value;
    const textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado, "desencriptado");
    textoArea.value = "";
}

function mostrarResultado(texto, tipo) {
    const textoUno = document.querySelector(".texto-uno");
    const textoDos = document.querySelector(".texto-dos");
    const areaEvaluar = document.querySelector(".evaluar");
    const botonCopiar = document.querySelector(".btn-copiar");

    if (texto) {
        textoUno.textContent = tipo === "encriptado" ? "Texto encriptado con éxito" : "Texto desencriptado con éxito";
        textoDos.textContent = "";
        areaEvaluar.value = texto;
        botonCopiar.style.display = "block";
    } else {
        textoUno.textContent = "Ningún texto encontrado";
        textoDos.textContent = "Ingrese texto que desea encriptar o desencriptar";
        areaEvaluar.value = "";
        botonCopiar.style.display = "none";        
    }
}

function accionCopiar() {
    const areaEvaluar = document.querySelector(".evaluar");
    areaEvaluar.select();
    document.execCommand("copy");
}

document.querySelector(".btn-encriptar").addEventListener("click", accionEncriptar);
document.querySelector(".btn-desencriptar").addEventListener("click", accionDesencriptar);
document.querySelector(".btn-copiar").addEventListener("click", accionCopiar);