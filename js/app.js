

// const viajes = [
//     {
//         id: 'holi',
//         title: 'Playa',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
//         thumbnail: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80',
//         price: 16000,
//     },
//     {
//         id: 'aa12313asd',
//         title: 'Montañas',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
//         thumbnail: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//         price: 12200,
//     },
//     {
//         id: 'asd12bfgjhlsd',
//         title: 'Bosques',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
//         thumbnail: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//         price: 24000,
//     },
//     {
//         id: 'asd123ajgjhlsd',
//         title: 'Bosques',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
//         thumbnail: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//         price: 24000,
//     },

//     {
//         id: 'abfgjhlsd',
//         title: 'Ciudad',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
//         thumbnail: 'https://images.unsplash.com/photo-1542202229-7d93c33f5d07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//         price: 24000,
//     },
//     {
//         id: 'asdasda1q21',
//         title: 'Playa',
//         description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta id quisquam error sit aut velit accusamus! Excepturi illum ipsum autem maxime rem exercitationem dignissimos magni labore. Dolore laudantium in vitae.',
//         thumbnail: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2096&q=80',
//         price: 16000,
//     },
// ];


// const contenedor = document.querySelector('.box-product');

// for (const viaje of viajes) {
//     contenedor.innerHTML += `
//     <article  id=${viaje.id} class="box">
//         <img src=${viaje.thumbnail} alt="imagen sobre ${viaje.title}">
//         <a class="borrar-button" data-id=${viaje.id}> <span>x</span> </a>
//         <div class="prod__body">
//             <h3>${viaje.title}</h3>
//             <p>${viaje.description}</p>
//             <b>${viaje.price}</b>
//             <button>Agregar al carrito</button>
//         </div>
//     </article>`;
// }
// for (const viaje of viajes) {
//     contenedor.innerHTML += `
//     <article id=${viaje.id} class="box">
//         <img src=${viaje.thumbnail} alt="imagen sobre ${viaje.title}">
//         <div class="prod__body">
//             <h3>${viaje.title}</h3>
//             <p>${viaje.description}</p>
//             <b>${viaje.price}</b>
//             <button onclick="agregarAlCarrito('${viaje.id}')">Agregar al carrito</button>
//         </div>
//     </article>`;
// }



// const form = document.querySelector('#form-viaje');
// const mensaje = document.querySelector('#mensaje');
// let nextId = 1;

// form.addEventListener('submit', agregarVaije);

// function agregarVaije(e) {
//     e.preventDefault();

//     const title = form.title.value;
//     const description = form.description.value;
//     const thumbnail = form.thumbnail.value;
//     const price = parseFloat(form.price.value);

//     if (title && description && thumbnail && !isNaN(price)) {

//         const nuevoViaje = {
//             id: `viaje-numero-${nextId}`,
//             title,
//             description,
//             thumbnail,
//             price,
//         }

//         viajes.push(nuevoViaje);

//         contenedor.innerHTML += `
//         <article  id=${nuevoViaje.id} class="box">
//             <img src=${nuevoViaje.thumbnail} alt="imagen sobre ${nuevoViaje.title}">
//             <a class="borrar-button" data-id=${nuevoViaje.id}> <span>x</span> </a>
//             <div class="prod__body">
//                 <h3>${nuevoViaje.title}</h3>
//                 <p>${nuevoViaje.description}</p>
//                 <b>${nuevoViaje.price}</b>
//                 <button onclick="agregarAlCarrito('${nuevoViaje.id}')">Agregar al carrito</button>
//             </div>
//         </article>`;

//         nextId++;

//         form.reset();
//         mensaje.innerHTML = `${nuevoViaje.title} , agregado con exito!`
//     } else {
//         mensaje.innerHTML = `'Por favor, completa todos los campos rey`
//     }
// }

// contenedor.addEventListener('click', function (e) {
//     if (e.target && e.target.classList.contains('borrar-button')) {
//         const idBorrar = e.target.getAttribute('data-id');
//         borrarViaje(idBorrar);
//     }
// })


// function borrarViaje(id) {
//     // Encuentra el índice del producto en el carrito
//     const index = carrito.findIndex((item) => item.id === id);

//     if (index !== -1) {
//         // Elimina el producto del carrito
//         carrito.splice(index, 1);

//         // Actualiza el carrito en el local storage
//         localStorage.setItem('carrito', JSON.stringify(carrito));

//         // Elimina el elemento del carrito en el DOM
//         const carritoElement = document.querySelector('.carrito');
//         const itemElement = document.getElementById(id);

//         if (itemElement) {
//             itemElement.remove();
//         }

//         // Actualiza la vista del carrito
//         mostrarCarrito();
//     }
// }

// // Inicializa el carrito vacío
// let carrito = [];

// // Obtén el carrito almacenado en el local storage, si existe
// if (localStorage.getItem('carrito')) {
//     carrito = JSON.parse(localStorage.getItem('carrito'));
//     console.log(carrito)
// }

// // Función para agregar un destino al carrito
// function agregarAlCarrito(id) {
//     // Busca el destino por su ID en el array de viajes
//     const destino = viajes.find((viaje) => viaje.id === id);
//     // Si el destino existe y no está en el carrito, agrégalo
//     if (destino && !carrito.some((item) => item.id === id)) {
//         carrito.push(destino);

//         // Actualiza el carrito en el local storage
//         localStorage.setItem('carrito', JSON.stringify(carrito));
//         console.log(carrito)
//     }
// }

// // Función para mostrar el contenido del carrito
// function mostrarCarrito() {
//     const carritoElement = document.querySelector('.carrito');
//     carritoElement.innerHTML = '';

//     carrito.forEach((item) => {
//         const carritoItem = document.createElement('div');
//         carritoItem.classList.add('carrito-item');
//         carritoItem.innerHTML = `
//         <article class="carrito-container">
//             <img src=${item.thumbnail} alt='imagen del destino de ${item.title}'>
//         <div class="carrito-body">
//             <span>Destino: ${item.title}</span>
//             <span>Precio: $${item.price}</span>

//             </div>
//             <a class="borrar-button" data-id="${item.id}"><span><i class="bi bi-trash"></i></span></a>
//         </article>
//       `;

//         const eliminarButton = carritoItem.querySelector('.borrar-button');
//         eliminarButton.addEventListener('click', () => {
//             borrarViaje(item.id);
//         });

//         carritoElement.appendChild(carritoItem);
//     });
// }

// mostrarCarrito();



// OPERADOR ++

// let numero = 12 ;
// numero = numero + 1;
// numero += 1223 ;
// numero++;

// console.log(numero);


// OPERADOR TERNARIO
// let edad = 20;

// if (edad >= 21) {
//     console.log('ya sos legal, podes beber alcohol.')
// } else {
//     console.log('no podes beber por ser menor de edad.')
// }

//condicion ? resultadoPositivo : resultadoNegativo;

// edad >= 21 ? console.log('ya sos legal, podes beber alcohol.') : console.log('no podes beber por ser menor de edad.');

// console.log( edad >= 21 ? 'ya podes tomar ' : 'no podes tomar');


//OPERADOR AND &&
// PARA QUE FUNCIONE, NECESITA QUE TODAS LAS CONDICIONES SEAN TRUE ES DECIR VERDADERAS 
// let condicion = true;

// if(condicion){
//     console.log('holi')
// }

// let carrito = []

// if(carrito.length === 0) {
//     console.log('el carrito esta vacio')
// }

// carrito.length === 0 && console.log('el carrito esta vacio')

// const user = {
//     username: 'admin',
//     password: '1234'
// }

// if(user.username === 'admin' && user.password ==='1234'){
//     console.log('bienvenido')
// } else {
//     console.log('credenciales incorrectas, intente de nuevo.')
// }


//OPERADOR OR ||
// VA A RECORRER CONDICION POR CONDICION HASTA QUE HAGA MATCH CON EL PRIMER TRUE, O PRIMER CONDICION VERDADERA SIN IMPORTAR LAS OTRAS CONDICIONES QUE LE SIGUEN
// const user1 = 'pepito1';
// const user2 = 'jorgito';

// if (user2) {
//     console.log(user2)
// } else {
//     console.log('usuario no existe.')
// }

// console.log( user2 || 'el usuario no existe.')

// if (user2 === 'jorgito' || user2 === 'pepito' || user2 === 2 && user1 === 'pepito' ){
//     console.log(user1);
// } else {
//     console.log('usuario no existe');
// }

//OPERADOR NULLISH ?? 
// NULLISH: null, undifined

// let numero ='undefined2';

// console.log(numero ?? 'el numero no es valido')


//ACCESO CONDICIONAL A UN OBJETO

// const user = {
//     username: 'admin',
//     password: '1234',
//     caracteristicas: {
//         crear: true,
//         actualizar: true,
//         borrar: true,
//     }
// }

// console.log(user?.caracteristicas?.leer || ' La propiedad no existe.');


//DESESTRUCTURACION DE OBJETOS 

// const user = {
//     username: 'admin',
//     password: '1234',
//     caracteristicas: {
//         crear: true,
//         actualizar: true,
//         borrar: true,
//     }
// }

// let { username, password, edad } = user;

// console.log(password, username, edad);


//DESESTRUCTURACION DE ARRAYS

// const nombres = [user = {
//     username: 'admin',
//     password: '1234',
//     caracteristicas: {
//         crear: true,
//         actualizar: true,
//         borrar: true,
//     }
// }, 'german', 'groot', 'rio de janeiro']

// const [, , b1, b12] = nombres;


// console.log( b1, b12);





//SPREAD DE ARRAY


// const userData = { username: 'admin', mail: 'mail@gmail.com' }

// const profilePicture = [{ thumbnail: 'https://lllll' }]
// const nombres = ['german', 'groot', 'rio de janeiro'];

// const nombres2 = [...nombres, 'jorge', ' mauro'];

// const { username } = userData;

// const usuario = [username, ...profilePicture, online = true]

// console.log(usuario);