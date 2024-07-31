document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita comportamento padrão de envio do formulário (nova requisição HTTP e recarga da página)

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('motivo').value;

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

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navUl = document.querySelector('nav ul');

  menuToggle.addEventListener('click', function() {
    navUl.classList.toggle('active');
  });
});
