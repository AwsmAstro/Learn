
var element = document.querySelectorAll('form input[type="text"]');
var l1 = document.getElementById('l1');
var l2 = document.getElementById('l2');
var l3 = document.getElementById('l3');
var select = document.querySelector('#box1 select');
var answer = document.getElementById('answer');
var n = document.getElementById('n');
var calcButton = document.querySelector('#bx1 input[type="button"]');
var clearButton = document.querySelector('#bx2 input[type="reset"]');
var currency1 = document.getElementById('currency');
var currency2 = document.getElementById('currency2');
var arr = ['UGX'];
var arr1 = ['UGX'];
var z;
var z1;
curr1_onchange_event();
curr2_onchange_event();
resetButtonClick();
var exchangeRate = {UGX: 3600, EURO: 0.8576, POUND: 0.7694, TSH: 2240, KSH: 103.8, SRAND: 12.9158, UAEDIRHAM: 3.6728, RWANDANFRANC: 831, USD: 1};

function changeFunction() {
    var selectedOption = select.options[select.selectedIndex].innerText;
    if (selectedOption === "Amount") {
        console.log('Amount');
        
        element[0].setAttribute('placeholder', 'Principal');
        element[0].setAttribute('title', 'Number Required');
        l1.innerText = 'Principal';

        element[1].setAttribute('placeholder', 'Rate');
        element[1].setAttribute('title', 'Enter %age rate < 100%');
        l2.innerText = 'Rate';

        element[2].setAttribute('placeholder', 'Time');
        element[2].setAttribute('title', 'Enter time in Years');
        l3.innerText = 'Time';
    }
    if(selectedOption === "Principal"){
        console.log('Principal');

        element[0].setAttribute('placeholder', 'Amount');
        element[0].setAttribute('title', 'Number Required');
        l1.innerText = 'Amount';

        element[1].setAttribute('placeholder', 'Rate');
        element[1].setAttribute('title', 'Enter %age rate < 100%');
        l2.innerText = 'Rate';

        element[2].setAttribute('placeholder', 'Time');
        element[2].setAttribute('title', 'Enter time in Years');
        l3.innerText = 'Time';
    }
    if(selectedOption === "Rate"){
        console.log('Rate');

        element[0].setAttribute('placeholder', 'Amount');
        element[0].setAttribute('title', 'Number Required');
        l1.innerText = 'Amount';

        element[1].setAttribute('placeholder', 'Principal');
        element[1].setAttribute('title', 'Number Required');
        l2.innerText = 'Principal';

        element[2].setAttribute('placeholder', 'Time');
        element[2].setAttribute('title', 'Enter time in Years');
        l3.innerText = 'Time';
    }
    if(selectedOption === "Time"){
        console.log('Time');

        element[0].setAttribute('placeholder', 'Amount');
        element[0].setAttribute('title', 'Number Required');
        l1.innerText = 'Amount';

        element[1].setAttribute('placeholder', 'Principal');
        element[1].setAttribute('title', 'Number Required');
        l2.innerText = 'Principal';

        element[2].setAttribute('placeholder', 'Rate');
        element[2].setAttribute('title', 'Enter %age rate < 100%');
        l3.innerText = 'Rate';
    }
}


function curr1Function(){
    var a = parseFloat(element[0].value);
    var b = parseFloat(element[1].value);
    var selectedOption = select.options[select.selectedIndex].innerText;
    var newVal = currency1.options[currency1.selectedIndex].innerText;
    arr.push(newVal);
    z = arr[arr.length - 2] + '-' + arr[arr.length - 1];
    var from =  exchangeRate[arr[arr.length - 2]];
    var to = exchangeRate[arr[arr.length - 1]];
    console.log(z);

    if ((selectedOption === "Amount" || selectedOption === "Principal") && element[0].value != "") {
        if(isNaN(a)){
            element[0].value = '';
        }
        else{
            element[0].value = convertCurrency(from, to, a);
        }
               
    }

    if((selectedOption === "Rate" || selectedOption === "Time") && (element[0].value != "" || element[1].value != "") ){
        if(isNaN(a)){
            element[0].value = '';
        }
        else{
            element[0].value = convertCurrency(from, to, a);
        }
        if(isNaN(b)){
            element[1].value = '';
        }
        else{
            element[1].value = convertCurrency(from, to, b);
        }      
    }

}
function curr1_onchange_event() {
    currency1.onchange = function() {  curr1Function()   }   
    
}

function curr2Function(){
    var newVal = currency2.options[currency2.selectedIndex].innerText;
    var a = parseFloat(answer.innerText);
    arr1.push(newVal);
    z1 = arr1[arr1.length - 2] + '-' + arr1[arr1.length - 1];
    var from =  exchangeRate[arr1[arr1.length - 2]];
    var to = exchangeRate[arr1[arr1.length - 1]];
    console.log(z1);
    if(isNaN(a)){
        //----
    }else{
        answer.innerText = convertCurrency(from, to, a);
    }


}
function curr2_onchange_event() {
    currency2.onchange = function() {  curr2Function()   }      
}

function convertCurrency(from, to, amnt) {
    var newamnt;
    newamnt = ((1/from)*to)*amnt;
    return newamnt;
}

function resetButton() {
    element[0].setAttribute('placeholder', 'Principal');
    l1.innerText = 'Principal';

    element[1].setAttribute('placeholder', 'Rate');
    l2.innerText = 'Rate';

    element[2].setAttribute('placeholder', 'Time');
    l3.innerText = 'Time';

    arr.push("UGX");
    arr1.push("UGX");

    answer.innerText = "Answer";
}

function resetButtonClick() {
    clearButton.onclick = function () {resetButton()};      
}
