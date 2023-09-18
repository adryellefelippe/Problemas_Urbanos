var button = document.querySelector('#botao');
var fields = document.querySelectorAll('[required]');
var campoCep = document.querySelector('input[name=cep]');
var vazio;

console.log(fields);

function addLoading() {
    button.innerHTML = '<img src="images/load.png" alt="Loading" class="loading">';
};

function removeLoading() {
    button.innerHTML = 'Enviar';
};

function buscaCep() {
    var cep = document.getElementById('cep').value;

    if(cep !== "" || cep !== null){
        var url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        var requisicao = new XMLHttpRequest();
        
        requisicao.open("GET", url);
        requisicao.send();

        requisicao.onload = function() {
            if(requisicao.status === 200){
                var endereco = JSON.parse(requisicao.response);

                document.querySelector('input[name=bairro]').value = endereco.neighborhood;
                document.querySelector('input[name=rua]').value = endereco.street;
            }
            else if (requisicao.status === 404){
                alert("CEP inválido.");
            }
        }
    }
};

 window.onload = function() {
    campoCep.addEventListener('blur', buscaCep);
 };

button.addEventListener('click', (event)=> {
    event.preventDefault();
    addLoading();

    fields.forEach(element => {
        if(element.value === null || element.value === ''){
            vazio = true;
        } else {
            vazio = false;
        }
    });

    if(vazio === false){
        var problema = document.querySelector('select[name=problema]').value;
        var descricao = document.querySelector('textarea[name=descricao]').value;
        var cep = document.querySelector('input[name=cep]').value;
        var bairro = document.querySelector('input[name=bairro]').value;
        var rua = document.querySelector('input[name=rua]').value;
        var data_abertura = new Date().toLocaleDateString();
        // var em_andamento = "Não";

        fetch('https://api.sheetmonkey.io/form/hp6LfqFLNvYYyzp5Jh17CS', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({problema, descricao, cep, bairro, rua, data_abertura}),
        }).then(() => {
            removeLoading();
    
            document.querySelector('select[name=problema]').value = '';
            document.querySelector('textarea[name=descricao]').value = '';
            document.querySelector('input[name=cep').value = '';
            document.querySelector('input[name=bairro]').value = '';
            document.querySelector('input[name=rua]').value = '';

            alert('Registro enviado!');
        });
    } else {
        removeLoading();
        alert('Campos vazios, favor preenche-los.');
    }

});
