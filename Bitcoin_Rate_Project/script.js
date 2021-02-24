var rate = document.querySelector('#price');
var btn = document.querySelector('button');
var currency = document.getElementsByName('currency');

//button Event Listener

btn.addEventListener("click", function() {
    //select currency
    if (currency) {
        for (var i = 0; i < currency.length; i++) {
            if (currency[i].checked) {
                var selectedCurrency = currency[i].value;
            }
        }
    }

    //XHR function
    var XHR = new XMLHttpRequest();

    XHR.onreadystatechange = function() {
            if (XHR.readyState == 4 && XHR.status == 200) {
                var quote = JSON.parse(XHR.responseText).bpi;
                rate.innerHTML = quote[selectedCurrency]['symbol'] + " " + quote[selectedCurrency]['rate'];
            }
        }
        //var price = quote.bpi.EUR.rate;
        //price.innerText = price + " EUR";

    //XHR request
    var api = "https://api.coindesk.com/v1/bpi/currentprice.json"
    XHR.open("GET", api);
    XHR.send();

});

window.onload = function() {
    document.querySelector('button').click();
}