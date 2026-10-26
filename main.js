const obras = {
    obras: {
        obra1: [
            numero: 1,
            titulo: 'Rojo'
            statement: 'Imagen vectorial que forma parte de la coleccion de imagenes de una tarea escolar'
        ],
        obra2: [
            numero: 2,
            titulo:'Tu alma en mi mirada'
            statement: 'Imagen 2D hecha en el software Krita, salio de parte de una obra colectiva entre los alumnos del Taller de Laboratorio de fotografia'
        ],
        obra3: [
            numero: 3,
            titulo: 'Hobbie'
            statement: 'Animacion 3D hecha en el programa Blender. primera vez haciendo animacion computarizada, inclui elementos que aprendi en clase'
        ]

    },
    statement: 'Me gusta hacer obras con colores billantes y bonitos'

}
console.log(document.getElementByld('obra1'))
//console.log (obras.obras.obra1)
//console.log (obras['obras']['obra1'])
let listadoObras = Object.keys(obras.obras)
//console.log (obras.obras[Object.keys(obras.obras)[1]])


for (let i = 0; i < listadoObras.length; i++) {
    console.log(obras.obras[listadoObras[i]])
    }

// ['obra1','obra2','obra3']