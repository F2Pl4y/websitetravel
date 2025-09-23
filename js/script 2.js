const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
    index = (i + slides.length) % slides.length;
    document.querySelector(".slides").style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

document.querySelector(".prev").addEventListener("click", () => showSlide(index - 1));
document.querySelector(".next").addEventListener("click", () => showSlide(index + 1));
dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

// Auto-slide cada 4s
setInterval(() => showSlide(index + 1), 4000);