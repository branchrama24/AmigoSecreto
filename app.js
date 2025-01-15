// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array que almacenará los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el valor del input
    const nombre = document.getElementById('amigo').value.trim();

    // Verificar si el nombre no está vacío
    if (nombre) {
        amigos.push(nombre);
        actualizarListaAmigos();
        document.getElementById('amigo').value = ''; // Limpiar el input
    } else {
        alert("Por favor, ingrese un nombre.");
    }
}

// Función para actualizar la lista de amigos mostrada en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo de los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos personas para hacer el sorteo.");
        return;
    }

    // Crear una copia de la lista de amigos
    const amigosCopy = [...amigos];
    const resultados = [];
    
    // Realizar el sorteo
    for (let i = 0; i < amigos.length; i++) {
        let amigoSecreto;
        
        // Asegurarse de que una persona no se sortee a sí misma
        do {
            amigoSecreto = amigosCopy[Math.floor(Math.random() * amigosCopy.length)];
        } while (amigoSecreto === amigos[i]);

        // Agregar el resultado
        resultados.push(`${amigos[i]} -> ${amigoSecreto}`);

        // Eliminar el amigo secreto sorteado para no repetir
        amigosCopy.splice(amigosCopy.indexOf(amigoSecreto), 1);
    }

    // Mostrar los resultados
    mostrarResultados(resultados);
}

// Función para mostrar los resultados del sorteo
function mostrarResultados(resultados) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpiar la lista antes de mostrar los resultados

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultadoLista.appendChild(li);
    });
}
