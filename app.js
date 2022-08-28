const makeReq =() =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data =>diplayQuote(data));
}


const diplayQuote = (qts) =>{
    console.log(qts.quote);
    // const quotes = qts.quote;
    // console.log(quotes);
    document.getElementById('qutoe').innerText = qts.quote;
}
