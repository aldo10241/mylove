var elemento = document.getElementById('carta')
var carta = "<h1 class='font-extrabold text-2xl italic text-purple-500'>Feliz aniversario corazón</h1><br><p class='text-center italic text-gray-500'>Todo este tiempo que hemos pasado juntos ha sido sumamente bonito, lleno de experiencias, palabras, recuerdos, sentimientos que me llenan el corazón de alegría, quiero pedirte que vivamos el presente amándonos y dando todo lo bueno que tenemos, te amo, me importas mucho y quiero seguir conquistando ese corazón tan grande y lindo que tienes, te mereces muchas cosas y quiero que vivamos el ahora con mucho cariño apoyándonos en todo lo que nos hace felices, saliendo adelante juntos, compartiendo nuestros logros y creando nuevos momentos juntos, quiero decirte todos los días lo mucho que te quiero, dejame seguir siendo parte de tu vida, me encantas.🫂</p";

var elemento2 = document.getElementById('identificador');
var nuevo_msj = "<p class='font-sans font-bold text-center text-lg text-gray-500'>¡Ten un gran día!</p>"

var elemento3 = document.getElementById('imagen');
var imagen = "<img class='w-full max-w-56 rounded-full mb-8' src='https://goo.su/kzY0TpI' alt=''>"

function mensaje() {
    elemento.classList.remove('fade-in');
    elemento.classList.add('fade-out');

    elemento2.classList.remove('fade-in');
    elemento2.classList.add('fade-out');

    elemento3.classList.remove('fade-in');
    elemento3.classList.add('fade-out');


    setTimeout(function () {
        elemento.innerHTML = carta;
        elemento.classList.remove('fade-out');
        elemento.classList.add('fade-in');

        elemento2.innerHTML = nuevo_msj;
        elemento2.classList.remove('fade-out');
        elemento2.classList.add('fade-in');

        elemento3.innerHTML = imagen;
        elemento3.classList.remove('fade-out');
        elemento3.classList.add('fade-in');

    }, 1000); // Tiempo de la transición (1s)
}


