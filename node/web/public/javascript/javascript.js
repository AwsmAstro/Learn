
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
calculateButton();
resetButtonClick();
curr2_onchange_event();
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

function amountCalculator( P, R, t, n) {
    var A, r, x, y;
    r = R/100;
    x = (1 + (r/n));
    y = n*t;

    A = P*(Math.pow(x, y));
    return A;
}

function PrincipalCalculator(A, R, t, n) {
    var P, r, x, y;
    r = R/100;
    x = (1 + (r/n));
    y = n*t;

    P = A/(Math.pow(x, y));
    return P;
}
function rateCalculator(A, P, t, n) {
    var R, r, x, y;
    y =1/(n*t);
    x = A/P;
    r = n*(Math.pow(x, y) - 1);
    R = r*100;
    return R;
}
function timeCalculator(A, P, R, n) {
    var t, r;
    r = R/100;
    t = (Math.log(A/P))/(n*(Math.log(1 + (r/n))));
    return t;
}
function continousAmount(P, R, t) {
    var A, r;
    r = R/100;
    A = P*(Math.exp(r*t));
    return A;
}
function continousPrincipal(A, R, t) {
    var P, r;
    r = R/100;
    P = A/(Math.exp(r*t));
    return P;
}
function continousRate(A, P, t) {
    var R, r;
    r = (Math.log(A/P))/t;
    R = r*100;
    return R;
}
function continousTime(A, P, R) {
    var t, r;
    r = R/100;
    t = (Math.log(A/P))/r;
    return t;
}

function calculate() {
    var a = parseFloat(element[0].value);
    var b = parseFloat(element[1].value);
    var c = parseFloat(element[2].value);
    var nselectedOption = n.options[n.selectedIndex].value;
    var selectedOption = select.options[select.selectedIndex].innerText;
    var s = parseFloat(nselectedOption);
    currency2.options[currency1.selectedIndex].selected = true;
    if (nselectedOption != "0") {
        
        if (selectedOption === "Amount") {
            if(b > 100){
                answer.innerText = "Please Fill In The Correct Required Fields";
            }else{
                answer.innerText = amountCalculator(a, b, c, s);
            }
        }  

        if (selectedOption === "Principal") {
            if(b > 100){
                answer.innerText = "Please Fill In The Correct Required Fields";
            }else{
                answer.innerText = PrincipalCalculator(a, b, c, s);
            }   
        } 

        if (selectedOption === "Rate") {
            answer.innerText = rateCalculator(a, b, c, s);
        } 

        if (selectedOption === "Time") {
            if(c > 100){
                answer.innerText = "Please Fill In The Correct Required Fields";
            }else{
                answer.innerText = timeCalculator(a, b, c, s);
            }     
        }

    }else if(nselectedOption === "0"){

        if (selectedOption === "Amount") {
            if(b > 100){
                answer.innerText = "Please Fill In The Correct Required Fields";
            }else{
                answer.innerText = continousAmount(a, b, c);
            }        
        }  

        if (selectedOption === "Principal") {
            if(b > 100){
                answer.innerText = "Please Fill In The Correct Required Fields";
            }else{
                answer.innerText = continousPrincipal(a, b, c);
            }    
        } 

        if (selectedOption === "Rate") {
            answer.innerText = continousRate(a, b, c);
        } 

        if (selectedOption === "Time") {
            if(c > 100){
                answer.innerText = "Please Fill In The Correct Required Fields";
            }else{
                answer.innerText = continousTime(a, b, c);
            }     
        }
    }

    if(answer.innerText === "NaN"){
        answer.innerText = "Please Fill In The Correct Required Fields";
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
    //newamnt = x.toFixed(5);
    return newamnt;
}

function calculateButton() {
   calcButton.onclick = function(){calculate()};
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
