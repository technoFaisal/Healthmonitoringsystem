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
$sql = "SELECT * FROM `users`; ";
$result = mysqli_query($conn, $sql);
?>
<!DOCTYPE html>
<html>
    <title>
        <head>List of Patients </head>
    </title>
<body>
<table algn ="center" border="1px" style="width:600px; line-height=50px;" >
<tr>
    <th colspan="4"> <h2>User1's record</h2></th>
</tr>
<t>
<th>SR</th>
<th>date</th>
<th>gas</th>
<th>bp</th>
<th>temp</th>

</t>
<?php 
while($row = mysqli_fetch_assoc($result))
{
?>
    <tr>
    <td> <?php echo $row['sr']; ?> </td>
        <td> <?php echo $row['date']; ?> </td>
        <td> <?php echo $row['gas']; ?> </td>
        <td> <?php echo $row['hb']; ?> </td>
        <td> <?php echo $row['temp']; ?> </td>
    </tr>
    <?php
}

mysqli_close($conn);
    ?>

</table>    

</body>
</html>


