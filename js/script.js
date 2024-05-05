let nuestrasCategorias = ['Anillos', 'Brazaletes', 'Collares', 'Broches', 'Joyeria'];
let categorias = document.querySelector(".dropdown-menu");
nuestrasCategorias.forEach((categoria, index) => {

    categorias.innerHTML += `<li><a class="dropdown-item" href="#">${categoria}</a></li>`

    if(index < nuestrasCategorias.length - 1) {
        categoria.innerHTML += "<hr>";
    }

});

Swal.fire({
    title: "Bienvenido a Chanel",
    text: "© Todos los derechos reservados",
    imageUrl: "https://pynck.com/wp-content/uploads/2021/10/paris-chanel-youtube-video-cropped-horizont.jpeg",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    confirmButtonColor: "#000000",
  });
