// Seleciona a imagem
const imagem = document.getElementById('minha-imagem');

// Função para redimensionar a imagem ao rolar a página
window.addEventListener('scroll', function() {
    // Obtém a posição do scroll na página
    let scrollPosition = window.scrollY;

    // Redução de tamanho
    let novoTamanho = 100 - scrollPosition / 5; // Pode ajustar o divisor para um efeito mais forte ou fraco

    // Faz a imagem não diminuir mais que 10% da original
    if (novoTamanho < 10) novoTamanho = 10;

    // Aplica a nova largura à imagem
    imagem.style.width = novoTamanho + '%';
});