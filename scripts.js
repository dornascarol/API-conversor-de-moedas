const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")    //valor em Real Brasileiro
    const currencyValueConverted = document.querySelector(".currency-value")              //valor em outras moedas

    const dolarToday = 5.2                                                              //valor fictício para o Dólar

    const convertedValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"        
    }).format(inputCurrencyValue)                                           //repetir o valor que está no input
                                                         
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency: "USD"
    }).format(convertedValue)                                            //valor convertido => valor escrito / valor do Dólar hoje

}

convertButton.addEventListener("click", convertValues)