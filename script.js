document.querySelector('#botao').addEventListener('click', (event)=> {
    event.preventDefault();

    var problema = document.querySelector('select[name=problema]').value;
    var descricao = document.querySelector('textarea[name=descricao]').value;
    var cep = document.querySelector('input[name=cep').value;
    var bairro = document.querySelector('input[name=bairro]').value;
    var rua = document.querySelector('input[name=rua]').value;
    var data_abertura = new Date().toLocaleDateString();

    fetch('https://api.sheetmonkey.io/form/ayv7gRJe8g28LVuZGUumLx', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({problema, descricao, cep, bairro, rua, data_abertura}),
    });

    alert('enviado');
});