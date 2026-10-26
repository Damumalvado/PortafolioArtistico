const obras = {
    obras: {
        obra1: {
            numero: 1,
            titulo: 'Icon',
            imagen: 'obra1.png',
            descripcion: 'Dibujo 2D creado en el programa digital de Krita.'
        },
        obra2: {
            numero: 2,
            titulo: 'Tu alma en mi mirada',
            imagen: 'obra2.png',
            descripcion: 'Trabajo de ilustración digital en 2D realizado en Krita. La obra es un retrato de una persona que me inspira y me motiva a seguir creando arte. La obra refleja la conexión emocional que siento con esa persona y cómo su presencia influye en mi proceso creativo.'
        },
        obra3: {
            numero: 3,
            titulo: 'Peligro manzana',
            imagen: 'obra3.png',
            descripcion: 'Ilustracion creada en Medibang, dedicada a mi amigo Ethan, quien ha estado desde el inicio.'
        }
    },
    statement: 'Soy Damu, me dedico a la ilustracion y la edicion de videos, aunque tambien me gusta experimentar con otras formas de arte. Mis obras son muy personales y reflejan mis emociones y pensamientos. Me dedico principalmente a la generacion de ilustraciones en 2D, pero tengo coocimeitnos en obras tres 3D y animacion en Blender y UnReal.'
}

let about = document.createElement('p')   //crear una variable about para alojar la creación de un nuevo elemento de párrafo
about.innerHTML = obras.statement
const log = document.querySelector(".about");
log.appendChild(about)
log.style.display = 'none'

// document.getElementsByClassName('about')[0].appendChild(about)

const button = document.querySelector("#aboutButton");

button.addEventListener("click", () => {
    if (log.style.display === 'none') {
        log.style.display = 'block'
    } else {
        log.style.display = 'none'
    }
});

const body = document.querySelector('.main')
body.addEventListener('click', ()=>{
     if (log.style.display != 'none') {
        log.style.display = 'none'}
})


// console.log(obras.obras.obra1)
// console.log(obras['obras']['obra1'])
let listadoObras = Object.keys(obras.obras)
// console.log(obras.obras[listadoObras[0]])
// let contenedorObras = document.getElementsByClassName('obras')[0]

const contenedorObras = document.getElementsByClassName('obras')[0];

for (let i = 0; i < listadoObras.length; i++) {
    let obraId = i + 1
    let diccionarioObraEnTurno = obras.obras[listadoObras[i]]

    let obraEnTurno = document.createElement('div')
    obraEnTurno.setAttribute('class', 'obra');
    obraEnTurno.setAttribute('id', 'obra' + obraId)

    let descripcionObra = document.createElement('div')
    descripcionObra.setAttribute('class', 'descripcion-obra')

    let encabezado = document.createElement('div')
    // let colors = ['red', 'blue', 'yellow', 'green', 'orange']
    // encabezado.style.background = colors[Math.round(Math.random()*4)]
    encabezado.setAttribute('class', 'encabezado-obra')
    encabezado.innerHTML = `<p class=numero-obra>0${obraId}</p><h2>${diccionarioObraEnTurno.titulo}</h2>`

    let obraContenido = document.createElement('div')
    obraContenido.setAttribute('class', 'obra-contenido')
    obraContenido.innerHTML = `<img src="${diccionarioObraEnTurno.imagen}"><p>${diccionarioObraEnTurno.descripcion}</p>`

    descripcionObra.appendChild(encabezado)
    descripcionObra.appendChild(obraContenido)
    obraEnTurno.appendChild(descripcionObra)
    contenedorObras.appendChild(obraEnTurno);

    console.log(obraEnTurno)
}



