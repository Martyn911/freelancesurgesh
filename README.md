#### В форме отправки вопроса нужно заменить
```
 <form action="#" method="#">
```
на
```
<form action="/handler.php" method="post">
<input type="hidden" name="form" value="question">
```

#### В форме регистрации заменить
```
<form action="#" method="#">
```
на
```
<form action="/handler.php" method="post">
<input type="hidden" name="form" value="get-started">
```
И
```
        <div class="input-container input--checkbox">
          <input class="css-checkbox" id="checkbox1" type="checkbox" name="checkbox">
          <label class="css-label" for="checkbox1">I am not a student</label>
        </div>
        <div class="input-container input--checkbox">
          <input class="css-checkbox" id="checkbox2" type="checkbox" name="checkbox">
          <label class="css-label" for="checkbox2">I have read and understood the Privacy Policy</label>
        </div>
```

на
```
        <div class="input-container input--checkbox">
          <input class="css-checkbox" id="checkbox1" name="student" type="checkbox">
          <label class="css-label" for="checkbox1">I am not a student</label>
        </div>
        <div class="input-container input--checkbox">
          <input class="css-checkbox" id="checkbox2" name="privacy" type="checkbox">
          <label class="css-label" for="checkbox2">I have read and understood the Privacy Policy</label>
        </div>
```

#### Файл handler.php загрузить в корневую директорию сайта