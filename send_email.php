<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = $_POST["email"];
    $subject = "Welcome to Web Developer";
    $message = "Thank you for signing up to Web Developer. I am an part time web developer and is currently pursueing freelancing in Web-Development
    if you are intrested in getting yourself an amazing website do contact me 
    contacts:+918078303005
    Email:pareekshith212@gmail.com";
    $headers = "From: webdeveloper@example.com";
    mail($to, $subject, $message, $headers);
    header("Location: ./index.html"); //redirect to index.html
    exit(); //exit to stop further execution
}
?>

