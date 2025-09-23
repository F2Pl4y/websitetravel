// const slides = document.querySelectorAll(".slide");
// const dots = document.querySelectorAll(".dot");
// let index = 0;

// function showSlide(i) {
//     index = (i + slides.length) % slides.length;
//     document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
//     dots.forEach(dot => dot.classList.remove("active"));
//     dots[index].classList.add("active");
// }

// document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));
// document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));
// dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

// // Auto-slide cada 4s
// setInterval(() => showSlide(index + 1), 4000);

// 1. Seleccionamos TODOS los sliders que existan en la página.
const todosLosSliders = document.querySelectorAll('.slider');

// 2. Recorremos cada uno de los sliders encontrados para inicializarlo por separado.
todosLosSliders.forEach(slider => {
    // Para cada slider, buscamos SUS PROPIOS elementos internos.
    const slides = slider.querySelectorAll('.slide');
    const dots = slider.querySelectorAll('.dot');
    const prevBtn = slider.querySelector('.prev');
    const nextBtn = slider.querySelector('.next');

    // Si un slider no tiene slides, no continuamos.
    if (slides.length === 0) {
        return;
    }

    // Cada slider tendrá su propio índice para contar sus slides.
    let index = 0;

    // La función para mostrar el slide correcto DENTRO de este slider en particular.
    function showSlide(i) {
        // Aseguramos que el índice se mantenga dentro de los límites (de 0 al número de slides - 1)
        if (i >= slides.length) {
            index = 0;
        } else if (i < 0) {
            index = slides.length - 1;
        } else {
            index = i;
        }

        // Movemos el contenedor de slides de ESTE slider
        const slidesContainer = slider.querySelector('.slides');
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;

        // Actualizamos los puntos de ESTE slider
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) { // Verificamos que el dot exista
            dots[index].classList.add('active');
        }
    }

    // Asignamos los eventos a los botones de ESTE slider
    prevBtn.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(index + 1);
    });

    // Asignamos los eventos a los puntos de ESTE slider
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
        });
    });

    // Creamos un auto-slide INDEPENDIENTE para cada slider
    setInterval(() => {
        showSlide(index + 1);
    }, 4000);

    // Mostramos el primer slide al cargar la página
    showSlide(0);
});