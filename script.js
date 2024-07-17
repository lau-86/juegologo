const logos = [
    { src: "./media/logos/nike.png", brand: "Nike" },
    { src: "./media/logos/puma.png", brand: "Puma" },
    { src: "./media/logos/google.png", brand: "Google" },
    { src: "./media/logos/mcdonalds.png", brand: "Mc Donalds" },
    { src: "./media/logos/louisevuitton.png", brand: "Louis Vuitton" },
    { src: "./media/logos/adidas.png", brand: "Adidas" },
];

const botoninicial = document.getElementById('iniciarjuego');
const logoimage = document.getElementById('logo');

botoninicial.addEventListener('click', comenzar);

function comenzar() {
    let score = 0;
    let index = 0;

    function pregunta() {
        if (index < logos.length) {
            const currentlogo = logos[index];
            logoimage.src = currentlogo.src;

            setTimeout(() => {
                let adivinar = prompt("¿A qué marca pertenece este logo?");
                if (adivinar && adivinar.toLowerCase() === currentlogo.brand.toLowerCase()) {
                    alert("¡Correcto!");
                    score++;
                } else {
                    alert(`Incorrecto. La marca correcta es ${currentlogo.brand}.`);
                }
                index++;
                pregunta();
            }, 500);
        } else {
            alert(`Juego terminado. Tu puntuación es ${score} de ${logos.length}.`);
            let jugardenuevo = confirm("¿Quieres jugar de nuevo?");
            if (jugardenuevo) {
                comenzar();
            }
        }
    }

    pregunta();
}
