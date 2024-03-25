fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=>currencyConveter(res))
let selestValue=document.querySelectorAll('.currency')
let input=document.getElementById('input')
let btn=document.getElementById('btn')


function currencyConveter(res){
   let value= Object.entries(res)
    for(let i=0;i<value.length;i++){
        let option =`<option value="${value[i][0]}">${value[i][0]}</option>`
        selestValue[0].innerHTML+=option
        selestValue[1].innerHTML+=option  
    }
}
btn.addEventListener('click',()=>{
    let currency1=selestValue[0].value
    let currency2=selestValue[1].value
    let amount= input.value
    if(currency1===currency2)
       alert("Please Enter Different Values")
    else
    convert(currency1,currency2,amount)

});
function convert(currency1,currency2,amount){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${amount}&from=${currency1}&to=${currency2}`)
  .then(resp => resp.json())
  .then((data) => {
   document.getElementById('result').value=Object.values(data.rates)[0]
  });
}