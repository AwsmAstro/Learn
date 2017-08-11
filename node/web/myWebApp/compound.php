<?php
    session_start();
    if(isset($_SESSION['login_user'])){
        echo $_SESSION['login_user'];
    }else{
        header("location: index.php");
    }

function amountCalculator( $P, $R, $t, $n) {
    $r = $R/100;
    $x = (1 + ($r/$n));
    $y = $n*$t;

    $A = $P*(pow($x, $y));
    return $A;
}

function PrincipalCalculator($A, $R, $t, $n) {
    $r = $R/100;
    $x = (1 + ($r/$n));
    $y = $n*$t;

    $P = $A/(pow($x, $y));
    return $P;
}
function rateCalculator($A, $P, $t, $n) {
    $y =1/($n*$t);
    $x = $A/$P;
    $r = $n*(pow($x, $y) - 1);
    $R = $r*100;
    return $R;
}
function timeCalculator($A, $P, $R, $n) {
    $r = $R/100;
    $t = (log($A/$P))/($n*(log(1 + ($r/$n))));
    return $t;
}
function continousAmount($P, $R, $t) {
    $r = $R/100;
    $A = $P*(exp($r*$t));
    return $A;
}
function continousPrincipal($A, $R, $t) {
    $r = $R/100;
    $P = $A/(exp($r*$t));
    return $P;
}
function continousRate($A, $P, $t) {
    $r = (log($A/$P))/$t;
    $R = $r*100;
    return $R;
}
function continousTime($A, $P, $R) {
    $r = $R/100;
    $t = (log($A/$P))/$r;
    return $t;
}

$answer = 0;


if(isset($_POST['Calculate'], $_POST['principal'], $_POST['rate'], $_POST['time'], $_POST['n'], $_POST['calc'])){
    $calculate = $_POST['Calculate'];
    $principal = $_POST['principal'];
    $rate = $_POST['rate'];
    $time = $_POST['time'];
    $n = $_POST['n'];

    if (!empty($calculate) && !empty($principal) && !empty($rate) && !empty($time) && !empty($n)) {

        $n1 = (int)$n;
        if($n != "0"){
            if($calculate == 'amount'){
                $answer = amountCalculator($principal, $rate, $time, $n1);
            }

            if($calculate == 'principal'){
                $answer = PrincipalCalculator($principal, $rate, $time, $n1);
            }

            if($calculate == 'rate'){
                $answer = rateCalculator($principal, $rate, $time, $n1);
            }

            if($calculate == 'time'){
                $answer = timeCalculator($principal, $rate, $time, $n1);
            }
        }
        if($n == "0"){
            if($calculate == 'amount'){
                $answer = continousAmount($principal, $rate, $time);
            }

            if($calculate == 'principal'){
                $answer = continousPrincipal($principal, $rate, $time);
            }

            if($calculate == 'rate'){
                $answer = continousRate($principal, $rate, $time);
            }

            if($calculate == 'time'){
                $answer = continousTime($principal, $rate, $time);
            }
        }
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="css/global.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <div id="wrapper">
            <div id="header">
                <div id="logo"></div>
                <h2>Compound Interest Calculator</h2>   
            </div>
            <div id="main">
                <div id="converter">
                    <form method = "post">
                        <div id="box1">
                            <label for="calculate">Calculate </label><select name="Calculate" id="calculate" onchange="changeFunction()">
                                <option value="amount">Amount</option>
                                <option value="principal">Principal</option>
                                <option value="rate">Rate</option>
                                <option value="time">Time</option>
                            </select>
                        </div>
                        <div id="box2">
                            <label for="currency">Currency </label><select name="currency" id="currency">
                                <option value="ugx">UGX</option>
                                <option value="usd">USD</option>
                                <option value="ksh">KSH</option>
                                <option value="euro">EURO</option>
                                <option value="pound">POUND</option>
                                <option value="euro">RWANDANFRANC</option>
                                <option value="euro">SRAND</option>
                                <option value="euro">UAEDIRHAM</option>
                                <option value="tsh">TSH</option>
                            </select>
                        </div>
                        <div id="clear"></div>
                        <label for="principal" id="l1">Principal </label><input type="text" name="principal" id="principal" placeholder="Principal" required title="Number Required">
                        <label for="rate" id="l2">Rate </label><input type="text" name="rate" id="rate" placeholder="Rate" required title="Enter %age rate < 100%">
                        <label for="time" id="l3">Time </label><input type="text" name="time" id="time" placeholder="Time" required title="Enter time in Years">
                        <label for="n">Compound(n) </label><select name="n" id="n">
                            <option value="0">Continousty</option>
                            <option value="365">Daily</option>
                            <option value="52">Weekly</option>
                            <option value="12">Monthly</option>
                            <option value="4">Quaterly</option>
                            <option value="2">Bi-Annually</option>
                            <option value="1">Annually</option>
                        </select>
                        <div id="bx1">
                            <input type="submit" value="Calculate" name="calc">
                        </div>
                        <div id="box3">
                            <label for="currency2" id="currencylabel">Currency: </label><select name="currency" id="currency2">
                                <option value="ugx">UGX</option>
                                <option value="usd">USD</option>
                                <option value="ksh">KSH</option>
                                <option value="euro">EURO</option>
                                <option value="pound">POUND</option>
                                <option value="euro">RWANDANFRANC</option>
                                <option value="euro">SRAND</option>
                                <option value="eae">UAEDIRHAM</option>
                                <option value="tsh">TSH</option>
                            </select>
                        </div>
                        <div id="bx2">
                            <input type="reset" value="Clear">
                        </div>
                        <div id="clear"></div>
                        <div id="answer">
                            <?php echo $answer;?>
                        </div>
                    </form>
                
                </div>
            </div>
            <div id="footer">
                  
            </div>
            </div>
        <script src="js/javascript.js"></script>
    </body>
</html>