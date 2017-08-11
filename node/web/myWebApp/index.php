
<?php
    include_once('resources/config.php');
    $myconn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD,DB_NAME);
    session_start();
    if (isset($_POST['firstname'], $_POST['secondname'], $_POST['sex'], $_POST['age'], $_POST['username'], $_POST['password'])) {

        $firstname = mysqli_real_escape_string($myconn, htmlentities($_POST['firstname']));
        $secondname = mysqli_real_escape_string($myconn, htmlentities($_POST['secondname']));
        $sex = mysqli_real_escape_string($myconn, htmlentities($_POST['sex']));
        $age = mysqli_real_escape_string($myconn, htmlentities($_POST['age']));
        $username = mysqli_real_escape_string($myconn, htmlentities($_POST['username']));
        $password = mysqli_real_escape_string($myconn, htmlentities($_POST['password']));

        if(!empty($firstname) && !empty($secondname) && !empty($sex) && !empty($age) &&!empty($username) && !empty($password)){
            echo $firstname.' '.$secondname.' '.$sex.' '.$age.' '.$username.' '.$password;
            $myquery = "INSERT INTO `users` SET
                `first name` = '$firstname',
                `second name` = '$secondname',
                `sex` = '$sex',
                `age` = '$age',
                `username` = '$username',
                `password` = '$password'";

            mysqli_query($myconn, $myquery);
        }
    }

    if(isset($_POST['logusername'], $_POST['logpassword'])){
        $logusername = mysqli_real_escape_string($myconn, htmlentities($_POST['logusername']));
        $logpassword = mysqli_real_escape_string($myconn, htmlentities($_POST['logpassword']));
        if(!empty($logusername) && !empty($logpassword)){
            $logquery = "SELECT `id` FROM `users` WHERE `username` = '$logusername' and `password` = '$logpassword'";
            $val = mysqli_query($myconn, $logquery);
            $row = mysqli_fetch_array($val, MYSQLI_ASSOC);
            $active = $row['active'];

            $count = mysqli_num_rows($val);

            if($count == 1){
                $_SESSION['login_user'] = $logusername;

                header("location: compound.php");
            }
            else{
                echo 'invalid username or password';
            }
        }
    }
?>
<!DOCTYPE html>

<html>
    <head>
        <link rel="stylesheet" type="" href="css/login.css">
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <div id="container">
            <div id="header">
                <div id="logo"></div>
                <h2>Compound Interest Calculator</h2> 
                <div id="log">
                    <form method = "post" action="">
                        <div id="user">
                            <label for="logusername">Username: </label><input type="text" name="logusername" id="logusername">
                        </div>
                        
                        <div id="pass"> 
                            <div id="pw">
                                <label for="logpassword">Password: </label><input type="password" name="logpassword" id="logpassword">
                            </div>
                            <div id="btn">
                                <input type="submit" name="login" value="login">
                            </div>
                        </div>
                        <div class="clear"></div>
                    </form>
                </div>
            </div>
            <div class="clear"></div>
            <div id = "signup">
                <form method="post" action"">
                    <label for="firstname">First name: </label><input type="text" name="firstname" id="firstname">
                    <label for="secondname">Second name: </label><input type="text" name="secondname" id="secondname">
                    <label for="male">Male: </label><input type="radio" name="sex" value="male" id="male">
                    <label for="female">Female: </label><input type="radio" name="sex" value="female" id="female">
                    <label for="age"></label>Age: <input type="text" name="age" id="age">
                    <label for="username"></label>Username: <input type="text" name="username" id="username">
                    <label for="password"></label>Password: <input type="password" name="password" id="password">
                    <input type="submit" name="signup" value="signup">
                </form>
            </div>
        </div> 
    </body>
</html>