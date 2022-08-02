class Jugador {
    constructor(nombre, posicion) {
        this.nombre = nombre;
        this.posicion = posicion;
    }



}



let jugadores = [];


/////OPERADOR TERNARIO

localStorage.getItem("jugadores") ? jugadores = JSON.parse(localStorage.getItem("jugadores")) : localStorage.setItem("jugadores", JSON.stringify(jugadores));


const form = document.getElementById("form");
const boton = document.getElementById("idBoton");
const divJugador = document.getElementById("divJugador");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    let datForm = new FormData(e.target);
    let jugador = new Jugador(datForm.get("nombre"), datForm.get("posicion"));
    jugadores.push(jugador);
    console.log(jugadores);
    localStorage.setItem("jugadores", JSON.stringify(jugadores));
    form.reset();

});

boton.addEventListener("click", () => {
    let arrayStorage = JSON.parse(localStorage.getItem("jugadores"));
    divJugador.innerHTML = "";
    arrayStorage.forEach((jugador, indice) => {
        divJugador.innerHTML += ` <div class="card text-bg-warning mb-3" id="jugador${indice}" style="max-width: 20rem; margin:4px;">
        <div class="card-header"><h2>${jugador.nombre}</h2></div>
        <div class="card-body">
            <p class="card-title">${jugador.posicion}</p>
            <button class="btn btn-danger">Eliminar Tarea</button>
        </div>
    </div> `

    });

    arrayStorage.forEach((jugador, indice) => {
        let botonCard = document.getElementById(`jugador${indice}`).lastElementChild.lastElementChild;
        botonCard.addEventListener('click', () => {
            document.getElementById(`jugador${indice}`).remove();
            jugador.splice(indice, 1);
            localStorage.setItem('jugador', JSON.stringify(jugador));
            console.log(`${jugador.nombre} Eliminada`);
        });
    });


});


///DESESTRUCTURACIÓN 

const jugador1 = {
    nombre: "Sadio",
    apellido: "Mane",
    edad: 30,

};

const jugador2 = structuredClone(jugador1);

let jugador1Nombre = jugador1.nombre;
let jugador1Edad = jugador1.edad;

console.log(jugador1Edad);
console.log(jugador1.apellido);
console.log(jugador2.apellido);