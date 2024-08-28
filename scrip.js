const texArea = document.querySelector(".tex-area");
const mensaje = document.querySelector(".mensaje-area");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(texArea.value);
    mensaje.value = textoEncriptado;
    texArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(texArea.value);
    mensaje.value = textoEncriptado;
    texArea.value = "";
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiarTexto() {
    const texto = mensaje.value; // Obtener el texto del área de mensaje

    if (texto) {
        navigator.clipboard.writeText(texto).then(function() {
            mostrarAlerta("Texto copiado al portapapeles");
            mensaje.value = ""
            mensaje.style.backgroundImage = "url('Imagenes/Muñeco.png')";
        }, function() {
            mostrarAlerta("Error al copiar el texto");
        });
    } else {
        mostrarAlerta("No hay texto para copiar");
    }
}
function limpiarTexto() {
    // Limpiar el contenido del textarea
    mensaje.value = ""; 
    // Restaurar la imagen de fondo en el área de mensaje
    mensaje.style.backgroundImage = "url('Imagenes/Muñeco.png')";

}

// Función para mostrar el cuadro de alerta
function mostrarAlerta(mensajeAlerta) {
    const customAlert = document.getElementById('custom-alert');
    const alertText = document.getElementById('alert-text');

    alertText.textContent = mensajeAlerta;
    customAlert.classList.add('active'); // Mostrar la alerta
}

// Función para cerrar la alerta
function closeAlert() {
    const customAlert = document.getElementById('custom-alert');
    customAlert.classList.remove('active'); // Ocultar la alerta
}

function btnEncriptar() {
    const texto = texArea.value.trim(); // Elimina espacios en blanco al inicio y al final

    if (texto === "") {
        mostrarAlerta("No hay texto para encriptar"); // Muestra alerta si el campo está vacío
    } else {
        const textoEncriptado = encriptar(texto);
        mensaje.value = textoEncriptado;
        texArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function mostrarAlerta(mensajeAlerta) {
    const customAlert = document.getElementById('custom-alert');
    const alertText = document.getElementById('alert-text');

    alertText.textContent = mensajeAlerta;
    customAlert.classList.add('active'); // Mostrar la alerta
}

function closeAlert() {
    const customAlert = document.getElementById('custom-alert');
    customAlert.classList.remove('active'); // Ocultar la alerta
}

function btnDesencriptar() {
    const texto = texArea.value.trim(); // Elimina espacios en blanco al inicio y al final

    if (texto === "") {
        mostrarAlerta("No hay texto para desencriptar"); // Muestra alerta si el campo está vacío
    } else {
        const textoEncriptado = desencriptar(texto);
        mensaje.value = textoEncriptado;
        texArea.value = "";
        mensaje.style.backgroundImage = "none";
    }
}

function mostrarAlerta(mensajeAlerta) {
    const customAlert = document.getElementById('custom-alert');
    const alertText = document.getElementById('alert-text');

    alertText.textContent = mensajeAlerta;
    customAlert.classList.add('active'); // Mostrar la alerta
}

function closeAlert() {
    const customAlert = document.getElementById('custom-alert');
    customAlert.classList.remove('active'); // Ocultar la alerta
}




