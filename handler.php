<?php
if(!empty($_POST['form'])){
    $to = "info@ifxacademy.com";
    $message = '';
    $subject = '';
    if('question' == $_POST['form']){
        $subject = 'Вопрос с сайта';
        $message .= 'Вопрос с сайта' . "\n";
    }
    if('get-started' == $_POST['form']){
        $subject = 'Регистрация на сайте';
        $message .= 'Регистрация на сайте' . "\n";
    }
    unset($_POST['form']);

    foreach ($_POST as $key => $value){
        $message .= ucfirst($key) . ' - ' . $value . "\n";
    }

    if(sendMail($to, $subject, $message)){
        echo 'Успешно отправлено';
    } else {
        echo 'Ошибка при отправке';
    }
} else {
    die('Error form!');
}

function sendMail($to, $subject, $message)
{
    $headers = 'From: info@ifxacademy.com' . "\r\n" .
        'Reply-To: info@ifxacademy.com' . "\r\n" .
        'Content-type: text/plain; charset=utf-8' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    return mail($to, $subject, $message, $headers);
}