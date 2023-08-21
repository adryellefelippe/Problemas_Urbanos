var button = document.querySelector('#botao');
var inputs = document.querySelectorAll('input');
var selects = document.querySelector('select');
var textAreas = document.querySelector('textarea');

function checkInputs (inputs, select, textArea){
    var filled = true;

    inputs.array.forEach(input => {
        if(input.value === ''){
            filled = false;
        }
    });

    if(select.value === ''){
        filled = false;
    };

    if (textArea.value === ''){
        filled = false;
    };

    return filled;
};

function addLoading() {
    button.innerHTML = '<img src="images/load.png" alt="Loading" class="loading">';
};

function remoceLoading (){
    button.innerHTML = 'Enviar';
};

inputs.forEach(input => {
    input.addEventListener('keyup', () => {
        if (checkInputs(inputs, selects, textAreas) === true){
            button.disabled = false;
        } else {
            button.disabled = true;
        };
    });
});

document.querySelector('#botao').addEventListener('click', (event)=> {
    event.preventDefault();
    addLoading();

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
    }).then(() => {
        remoceLoading();

        document.querySelector('select[name=problema]').value = '';
        document.querySelector('textarea[name=descricao]').value = '';
        document.querySelector('input[name=cep').value = '';
        document.querySelector('input[name=bairro]').value = '';
        document.querySelector('input[name=rua]').value = '';
    });
});
