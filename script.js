const apiConector = (event) => {
    event.preventDefault();

    fetch('https://api.sheetmonkey.io/form/ayv7gRJe8g28LVuZGUumLx'), {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }
        )
    }

    alert('enviado');
}

document.querySelector('form').addEventListener('submit', apiConector)