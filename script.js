document.addEventListener('keydown', function (event) {
    if (event.altKey && event.key === '1') {
        alert('Você usou o atalho Alt+1 para acessar o ChatGPT.');
    } else if (event.altKey && event.key === '2') {
        alert('Você usou o atalho Alt+2 para acessar o DALL-E.');
    } else if (event.altKey && event.key === '3') {
        alert('Você usou o atalho Alt+3 para acessar o MidJourney.');
    }
});
