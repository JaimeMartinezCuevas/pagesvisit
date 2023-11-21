const contadorVisitas = document.getElementById('contadorVisitas');
const btnReestablecer = document.getElementById('btnReestablecer');

//Facemos que las visitas sean iguales al valor del local storage 
//(Con session storage se borran los datos al cerrar la pestaña)
let visitas = localStorage.getItem('visitas');

//Prueba
const print = `Las visitas hasta el momento han sido de ${visitas}`;

//Sumamos de uno en uno cada vez que se carge la web
visitas++;
contadorVisitas.innerHTML = visitas;

//Definimos visitas
localStorage.setItem('visitas', visitas);

//Facemos que el botón limpie local storage y el valor visitas vuelva a 1
btnReestablecer.addEventListener('click', () => {

    localStorage.clear();

    visitas = 0;
    contadorVisitas.innerHTML = visitas;

    alert('El número de visitas se ha limpiado correctamente.');
});

//Prueba
console.log(localStorage);
console.log(print);