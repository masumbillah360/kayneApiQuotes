const makeReq =() =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data =>diplayQuote(data));
}
const diplayQuote = (qts) =>{
    console.log(qts.quote);
    document.getElementById('quote-text').innerText = qts.quote;
}

const copyText =()=>{
    const copiedText = document.getElementById('quote-text');
    navigator.clipboard.writeText(copiedText.innerText);
    alert("copied");
}
