const apiConector = (event) => {
    event.preventDefault();

    fetch('https://api.sheetmonkey.io/form/ayv7gRJe8g28LVuZGUumLx'), {
        
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            problema: 'Falta de Energia',
            descricao: 'Falta de energia desde as 8 do dia 16/08',
            cep: '12322540',
            bairo: 'Sao Joao',
            rua: 'Jaime de Moraes',
            data_abertura: '16/08/2023'
        })
    }

    alert('enviado');
}

document.querySelector('form').addEventListener('submit', apiConector)