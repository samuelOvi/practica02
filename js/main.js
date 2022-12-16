function Scrool(inicia, termina) {
    $(inicia).on("click", function () {
        var posicion = $(termina).offset().top;
        $("html, body").animate({
            scrollTop: posicion - 90
        }, 100);
    });
}
Scrool("#home", ".seccion1");
Scrool("#about", ".seccion2");
Scrool("#service", ".seccion3");
Scrool("#contact", ".seccion4");

//ANIMADO
let animado = $(".animado");
function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 640 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba")
        }
    }
}

window.addEventListener('scroll', mostrarScroll)
