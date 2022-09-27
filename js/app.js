$(document).ready(function(){
    //HERO SLIDER
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        dots: false,
        smartSpeed: 1250,
        navText: ['Atrás', 'Siguiente'],
        responsive:{
            0:{
                nav: false
            },
            //con estas dimensiones el botón se muestra de anterior y siguiente
            768:{
                nav: true
            }
        }
    })


    //PROJECT SLIDER
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        smartSpeed: 1000,
        margin: 24,
        navText: ["Atrás", "Siguiente"],
        responsive:{
            0:{
                items: 1,
                nav: false,
                margin: 0,
            },
            768:{
                items:2,
            },
            1140: {
                items: 2,
                center: true,
            }
        }
    })
});
