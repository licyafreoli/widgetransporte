document.getElementById('call-button').addEventListener('click', function() {
    alert('Chamada para Marcos!');
});

document.getElementById('message-button').addEventListener('click', function() {
    const message = document.querySelector('input[type="text"]').value;
    alert(`Mensagem enviada para Marcos: "${message}"`);
});
