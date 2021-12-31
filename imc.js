const calcular = document.getElementById('btnCalcular')

function calcularImc() {
    const nome = document.getElementById('txtNome').value
    const altura = document.getElementById('txtAltura').value
    const peso = document.getElementById('txtPeso').value

    const menssagem = document.getElementById('txtResultado')


    if (nome !== '' && altura !== '' && peso !== '') {
        const imc = peso / (altura * altura)

        let classificacao

        if (imc < 18.5) {
            classificacao = 'abaixo do peso'
        } else if (imc >= 18.5 && imc < 24.9) {
            classificacao = 'no peso normal'
        } else if (imc >= 24.9) {
            classificacao = 'acima do peso'
        }

        menssagem.textContent = nome + ', o seu IMC é de ' + imc.toFixed(1) + ' e voce esta ' + classificacao + '.'

    } else {
        menssagem.textContent = 'O preenchimento de todos os campos é obrigatorio.'
    }



}

calcular.addEventListener('click', calcularImc)