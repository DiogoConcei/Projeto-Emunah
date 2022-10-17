const enviar = document.getElementById('enviar')
const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')


enviar.addEventListener('click', (event) => {
    event.preventDefault()

    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    const assunto = document.getElementById('assunto')
    const mensagem = document.getElementById('mensagem')
    const regex = /^[0-9]+$/
    if (nome.value == '') {
        nome.classList.add("errorInput")
    } else if (nome.value == regex) {
        nome.classList.add("errorInput")
    } else {
        nome.classList.remove("errorInput")

    }

    if (email.value == '') {
        email.classList.add("errorInput")
    }

    if (assunto.value == '') {
        assunto.classList.add("errorInput")
    } else {
        assunto.classList.remove("errorInput")

    }

    if (mensagem.value == '') {
        mensagem.classList.add("errorInput")
    } else {
        mensagem.classList.remove("errorInput");

    }

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") -
        email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")

    } else {
        email.classList.remove("errorInput")
    }


})

