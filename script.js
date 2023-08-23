var button = document.querySelector('#botao');
var fields = document.querySelectorAll('[required]');
var vazio;

console.log(fields);

function addLoading() {
    button.innerHTML = '<img src="images/load.png" alt="Loading" class="loading">';
};

function removeLoading (){
    button.innerHTML = 'Enviar';
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
            removeLoading();
    
            document.querySelector('select[name=problema]').value = '';
            document.querySelector('textarea[name=descricao]').value = '';
            document.querySelector('input[name=cep').value = '';
            document.querySelector('input[name=bairro]').value = '';
            document.querySelector('input[name=rua]').value = '';
        });
    } else {
        removeLoading();
        alert('Campos vazios, favor preenche-los.')
    }

});
