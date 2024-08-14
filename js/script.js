// document.addEventListener('DOMContentLoaded', function() {
//   const menuToggle = document.getElementById('menu-toggle');
//   const navUl = document.querySelector('nav ul');

//   menuToggle.addEventListener('click', function() {
//     navUl.classList.toggle('active');
//   });
// });

$(document).ready(function(){
  $('.produtos-carousel ul').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.button-plan button');
  const modal = document.getElementById('modal');
  const closeButton = document.querySelector('.close-button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const plan = this.getAttribute('data-plan');
      fetchContent(plan);
      openModal();
    });
  });

  closeButton.addEventListener('click', closeModal);
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  function fetchContent(plan) {
    let url = '';

    switch(plan) {
      case 'start':
        url = 'pet_start.html';
        break;
      case 'essencial':
        url = 'pet_essencial.html';
        break;
      case 'max':
        url = 'pet_max.html';
        break;
    }

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(html => {
        document.getElementById('plan-details').innerHTML = html;
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }

  function openModal() {
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita comportamento padrão de envio do formulário (nova requisição HTTP e recarga da página)

    // Obter valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('motivo').value.trim();

    // Função para validar o e-mail
    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }

    // Validar os campos
    if (!nome || !email || !mensagem) {
      alert('Todos os campos são obrigatórios!');
      return;
    }
    if (nome.split(' ').length < 2) {
      alert('O nome deve conter ao menos nome e sobrenome!');
      return;
    }
    if (!validarEmail(email)) {
      alert('O e-mail deve estar no formato correto!');
      return;
    }

    // Armazenar no Local Storage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('motivo', mensagem);

    alert('Dados armazenados com sucesso!');

    // Limpar os campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('motivo').value = '';
  });
});
