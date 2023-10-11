

const viajes = [
    {
        id: 'holi',
        title: 'Playa',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
        thumbnail: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80',
        price: 16000,
    },
    {
        id: 'aa12313asd',
        title: 'Montañas',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
        thumbnail: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 12200,
    },
    {
        id: 'asd12bfgjhlsd',
        title: 'Bosques',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
        thumbnail: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 24000,
    },
    {
        id: 'asd123ajgjhlsd',
        title: 'Bosques',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
        thumbnail: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 24000,
    },

    {
        id: 'abfgjhlsd',
        title: 'Ciudad',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
        thumbnail: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        price: 24000,
    },
    {
        id: 'asdasda1q21',
        title: 'Playa',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
        thumbnail: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80',
        price: 16000,
    },
];


const contenedor = document.querySelector('.box-product');

for (const viaje of viajes) {
    contenedor.innerHTML += `
    <article  id=${viaje.id} class="box">
        <img src=${viaje.thumbnail} alt="imagen sobre ${viaje.title}">
        <div class="prod__body">
            <h3>${viaje.title}</h3>
            <p>${viaje.description}</p>
            <b>${viaje.price}</b>
            <a class="borrar-button" data-id=${viaje.id}> <span>x</span> </a>
        </div>
    </article>`;
}



const form = document.querySelector('#form-viaje');
const mensaje = document.querySelector('#mensaje');
let nextId = 1;

form.addEventListener('submit', agregarVaije);

function agregarVaije(e){
    e.preventDefault();
    
    const title = form.title.value;
    const description = form.description.value;
    const thumbnail = form.thumbnail.value;
    const price = parseFloat(form.price.value);
    
    if(title && description && thumbnail && !isNaN(price)){

        const nuevoViaje = {
            id: `viaje-numero-${nextId}`,
            title,
            description,
            thumbnail,
            price,
        }

        viajes.push(nuevoViaje);

        contenedor.innerHTML += `
        <article  id=${nuevoViaje.id} class="box">
            <img src=${nuevoViaje.thumbnail} alt="imagen sobre ${nuevoViaje.title}">
            <div class="prod__body">
                <h3>${nuevoViaje.title}</h3>
                <p>${nuevoViaje.description}</p>
                <b>${nuevoViaje.price}</b>
                <a class="borrar-button" data-id=${nuevoViaje.id}> <span>x</span> </a>
            </div>
        </article>`;

        nextId++;

        form.reset();
        mensaje.innerHTML =`${nuevoViaje.title} , agregado con exito!`
    } else {
        mensaje.innerHTML =`'Por favor, completa todos los campos rey`
    }
}

contenedor.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('borrar-button')) {
        const idBorrar = e.target.getAttribute('data-id');
        borrarViaje(idBorrar);
    }
})


function borrarViaje(id){
    const iD = viajes.findIndex((viaje) => viaje.id === id);

    if(iD !== -1){
        viajes.splice(id,1)

        const btnBorrar = document.getElementById(id);
        if(btnBorrar){
            btnBorrar.remove();
        }
    }
}

























/*---------------------------------------------------------------  */

// const cambiando = document.querySelector('.reformando');
// const contenidoOriginal = cambiando.innerHTML;

// console.log(contenidoOriginal)

// function modificandoHtml() {
//     cambiando.innerHTML = 'tuki';
// }

// function restaurarHtml() {
//     cambiando.innerHTML = contenidoOriginal;
// }

// function jugandoConElHtml() {
//     if (cambiando.innerHTML == contenidoOriginal) {
//         modificandoHtml();
//     } else {
//         restaurarHtml();
//     }
// }
// cambiando.addEventListener('click', jugandoConElHtml);

// const btn = document.querySelector('#btn-click');

// btn.addEventListener("click", saludar);

// function saludar() {
//     alert('holi');
//     console.log('holi');
// }


// btn.onclick = () => ( alert('holi'));
//<p id="btn-click" onclick="alert('holi')">Dame click rey!</p>

//EVENTO TECLADO


{/* 
<form action="" id="formulario-texto">
    <input type="text" id="input" placeholder="texto">
    <p id="input-texto"></p>
</form> 
*/}

// const input = document.querySelector('#input');
// const inputTexto = document.querySelector('#input-texto');


//FUNCION PARA MOSTRAR EL VALOR DEL INPUT ES DECIR EL TEXTO QUE SE INGRESA.
// input.addEventListener('input', agregandoTexto);

// function agregandoTexto() {
//     inputTexto.innerHTML = `Holi <br> ${input.value}`;
// }

//FUNCION PARA SABER QUE TECLA ESTA TOCANDO EL USUARIO
// input.addEventListener('keydown', mostrarKey);

//FUNCION PARA SABER QUE TECLA TOCO EL USUARIO
// input.addEventListener('keyup', mostrarKey);

// function mostrarKey(e){
//     console.log('pass',  e.key)
// }