reiniciar();

function reiniciar() {
    document.getElementById("botonCopiar").style.display = "none";
    document.getElementById("imagen1").style.display = "inline";
    limpiarCaja();
}

function encriptar() {
    //Esconder imagen al presionar el boton
    document.getElementById("imagen1").style.display = "none";
    //Logica de encriptacion
    let textoUsuario = document.getElementById('valorUsuario').value;
    console.log(textoUsuario);
    //proximamente cambiar variable cuando se tenga la logica
    let textoEncriptado = textoUsuario.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    //Para cambiar el textoProcesado a el texto encriptado
    document.getElementById("textoProcesado").innerHTML = textoEncriptado;
    //Mostrar boton de copiar
    document.getElementById("botonCopiar").style.display = "inline";
    //Boton copiar
    limpiarCaja()
}



function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function desencriptar() {
    //Tomando el texto encriptado del usuario
    let textoUsuarioDensencriptado = document.getElementById('valorUsuario').value;
    console.log(textoUsuarioDensencriptado);
    //Desencriptando texto
    let textoDesencriptado = textoUsuarioDensencriptado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    //Desencriptando texto
    document.getElementById("textoProcesado").innerHTML = textoDesencriptado;
}

function copiar() {
    let textoProcesado = document.getElementById('textoProcesado').innerHTML;
        navigator.clipboard.writeText(textoProcesado)
    limpiarCajaEncriptado("Ningún mensaje fue encontrado")
    reiniciar()
}

function limpiarCajaEncriptado(texto="") {
    let valorCaja = document.querySelector('#textoProcesado').innerHTML = texto;
}