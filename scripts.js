const button = document.getElementById('convert-button')
const select = document.getElementById('currency-input')



const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('currency-real-value')
    const currencyAll = document.getElementById('currency-all')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())
    const euro = data.EURBRL.high
    const dolar = data.USDBRL.high
    const bitcoin = data.BTCBRL.high



    realValueText.innerHTML = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputReais);

    if (select.value === 'US$ Dólar Americano') {
        currencyAll.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReais / dolar)
    }

    if (select.value === '€ Euro') {
        currencyAll.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReais / euro)
    }

    if (select.value === 'Bitcoin') {
        currencyAll.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
        }).format(inputReais / bitcoin)
    }

}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = 'US$ Dólar Americano'
        currencyImg.src = './assets/estados-unidos (1) 1.png'
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = '€ Euro'
        currencyImg.src = './assets/Design sem nome 1.png'
    }

    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/Design sem nome (1) 1.png '
    }
    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)