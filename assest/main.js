var formConvert = document.querySelector(" .card .currency");
var result=0.0;
var amount;
var toCoin;
formConvert.onsubmit=function(e){
    e.preventDefault();
    elements = e.target.elements;
    amount=elements[0].value; 
    toCoin=elements[1].value;
  console.log(amount,toCoin);
  if(toCoin=="JOD"){
    result=amount*5;
  }
  else if (toCoin == "USD") {
    result = amount * 3.75;
  } else {
    result = amount;
  }
  showConvert();
}
function showConvert(){
    var data=``;
    data += `<h2>${amount}₪ = ${result} ${toCoin}</h2>`;
    document.querySelector(".card .result").innerHTML=data;
}