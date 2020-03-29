var i = 0;
var images = [];
var time = 3000;

//Lista de imagens 
images[0] = '../img/slideshow/banner.jpg';
images[1] = '../img/slideshow/banner2.jpg';
images[2] = '../img/slideshow/banner3.jpg';

//mudança de imagens
function mudaImagem() {
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("mudaImagem()", time);
}

window.onload = mudaImagem;