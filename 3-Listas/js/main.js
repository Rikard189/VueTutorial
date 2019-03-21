const vm = new Vue({
    el: 'main',
    data: {
        laborales: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
        tareas: [
            {nombre: 'Mandado', prioridad: 'baja'},
            {nombre: 'Aprender Vue', prioridad: 'alta'},
            {nombre: 'Ir al gimnasio', prioridad: 'alta'},
        ],

        persona : {
            nombre: 'Ricardo',
            profesion: 'Web Developer',
            ciudad: 'Houston',
        },
    },
});