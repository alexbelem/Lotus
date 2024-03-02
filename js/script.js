document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.fade');
  let currentImageIndex = 0;

function enviarWhatsApp() {
    // Substitua o número de telefone com o seu
    window.open('https://wa.me/+5521967759758', '_blank');
}

function enviarEmail() {
    // Substitua o endereço de e-mail com o seu
    window.location.href = 'mailto:lotussaudementaleocupacional@gmail.com?subject=Contato&body=Mensagem%20do%20formul%C3%A1rio%3A%0D%0A%0D%0ANome%3A%20%5BInsira%20o%20nome%20aqui%5D%0D%0ATelefone%3A%20%5BInsira%20o%20telefone%20aqui%5D%0D%0AEmail%3A%20%5BInsira%20o%20email%20aqui%5D%0D%0AMensagem%3A%20%5BInsira%20a%20mensagem%20aqui%5D%0D%0A';
}


  function showImage(index) {
    images.forEach((image, i) => {
      if (i === index) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  // Inicializa a primeira imagem
  showImage(currentImageIndex);

  // Configura um intervalo para trocar as imagens a cada 3-5 segundos
  setInterval(nextImage, 5000); // Ajuste o intervalo conforme necessário
});

