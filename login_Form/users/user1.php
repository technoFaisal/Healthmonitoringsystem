<?php

$servername = "localhost";
$username = "root";
$password = "";
$database = "test";


$conn  = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Failed  to connect" . mysqli_connect_error());
} else {
    echo "connection successful";
}
?>

<!doctype html>
<html>

<head>
    <title>

    </title>
</head>

<body>

    <?php

    $sql = "SELECT * FROM `users`; ";
    $result = mysqli_query($conn, $sql);
    $resultcheckG = mysqli_num_rows($result);

    if ($resultcheckG > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            //echo $row['gas'] ."<br>";
            echo     "date :{$row['date']} <br>" .
                "Gas :{$row['gas']}  <br> " .
                "TEMP NAME : {$row['temp']} <br> " .
                "HB SALARY : {$row['hb']} <br> " .
                "--------------------------------<br>";
        }
    }

    mysqli_close($conn);
    ?>
</body>

</html>