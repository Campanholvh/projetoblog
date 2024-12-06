const spinnerWrapperEl = document.querySelector('.spinner-wrapper'); //Seleciona o elemento

//Apaga o spinner ao carregar a página

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200);
});