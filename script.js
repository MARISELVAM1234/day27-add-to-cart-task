var totalAmount = 0 ;



function selectFunc() {
    var selectElement = document.getElementById("select").value;
    var priceElement = document.getElementById("amount") .innerHTML
     totalAmount = selectElement * priceElement ;
     document.getElementById("display").innerHTML =totalAmount
}


function addFunc (){
    // console.log(totalAmount)
    document.getElementById ("right").innerHTML = `<div class ="product-1">
        <h1>product 1</h1>
        <h2>price : <span id="amount">200</span></h2>
                <h3 id="display"> Total :${totalAmount}</h3>
             <button onclick="removeBtnFunc()">Remove</button>   

    </div>`
}



function selectFunc1() {
    var selectElement = document.getElementById("select2").value;
    var priceElement = document.getElementById("amount2") .innerHTML
     totalAmount = selectElement * priceElement ;
     document.getElementById("display2").innerHTML =totalAmount
}


function addFunc1(){
    // console.log(totalAmount)
    document.getElementById ("right2").innerHTML = `<div class ="product-1">
        <h1>product 2</h1>
        <h2>price : <span id="amount">250</span></h2>
                <h3 id="display"> Total :${totalAmount}</h3>
             <button onclick="removeBtnFunc2()">Remove</button>   

    </div>`
}


function removeBtnFunc() {
    var orderElement = document.getElementById
    ('right' );
  console.log( orderElement.remove()) ;
   
}
function removeBtnFunc2() {
    var orderElement2 = document.getElementById('right2');

  console.log( orderElement2.remove()) ;

}