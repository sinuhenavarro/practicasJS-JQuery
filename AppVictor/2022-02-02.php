<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <script src="js/bootstrap.bundle.min.js"></script>
  <style type="text/css">
    .inputLetter {
      text-transform: uppercase;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
  </style>
</head>
<body>
<?php
  function getRandomWord() {
    // ACCESS TO DATABASE AND RETURN A RANDOM WORD
    $link = mysqli_connect("localhost","wordleuser","wordleuser","wordledb");
    if (mysqli_connect_errno()) {
      echo "Error de enlace de conexión a MySQL: " . mysqli_connect_error();
      exit();
    }
    $query = "SELECT words.word FROM words ORDER BY RAND() LIMIT 1";
    $result = mysqli_query($link, $query);
    mysqli_close($link);
    $row = mysqli_fetch_row($result);
    mysqli_free_result($result);
    return strtoupper($row[0]);
  }

  function getJSArrayFromWord($word) {
    $array = str_split($word, 1);
    // $jsArray = "['$array[0]','$array[1]','$array[2]','$array[3]','$array[4]']";
    $lenght = count($array);
    $jsArray = '[';
    for($i=0;$i<$lenght;$i++) {
      $jsArray = $jsArray."'$array[$i]',";
    }
    $jsArray = substr($jsArray, 0 , strlen($jsArray)-1).']';
    print_r($jsArray);

    return $jsArray;
  }
  // supuesta consulta SQL para obtener palabra del día
  $randomWord = getRandomWord();
  $wordOfTheDay = getJSArrayFromWord($randomWord);
?>  
<!--
<nav class="navbar navbar-expand-sm bg-secondary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="img/ubuntu-512.png" style="width: 48px;"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>    
      </ul>
    </div>
  </div>
</nav>
-->
<div class="container">
  <div class="row">
    <div class="col-12 col-sm-2 col-lg-3"></div>
    <div class="col-12 col-sm-8 col-lg-6">
      <form class="form-inline" action="index.html" method="post">
        <div class="input-group">
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter" onkeyup="letterPressed()"/>
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter" onkeyup="letterPressed()"/>
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter" onkeyup="letterPressed()"/>
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter" onkeyup="letterPressed()"/>
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter" onkeyup="letterPressed()"/>
          <button type="button" name="button" class="form-control" onclick="Geeks();">En</button>
        </div>
      </form>
    </div>
    <div class="col-12 col-sm-2 col-lg-3"></div>
  </div>
</div>
<script type="text/javascript">
  function checkIfItIsInAnotherPlace(word,position) {
    var input = document.getElementsByName('array[]');
    var notIs = true;   
    for(let i=0; i<word.length; i++) {
      if(input[position].value.toUpperCase() == word[i]) {
        input[position].style.backgroundColor = "#FFA900";
        input[position].style.color = "#FBFBFB";
        notIs = false;
      }
    }
    if(notIs) {
      input[position].style.backgroundColor = "#666";
      input[position].style.color = "#FBFBFB";
    }
  }

  function Geeks() {
    var word = <?php echo $wordOfTheDay; ?>;
    var input = document.getElementsByName('array[]');

    for (var i = 0; i < input.length; i++) {
      var a = input[i];
      if(input[i].value.toUpperCase() == word[i] ) {
        input[i].style.backgroundColor = "#00B74A";
        input[i].style.color = "#FBFBFB";        
      } else {
        checkIfItIsInAnotherPlace(word,i);
      }
      k = k + "array[" + i + "].value= "+ a.value + " ";
    }
  }
  function letterPressed() {
    input = document.getElementsByName('array[]');    
    for (var i = 0; i < input.length-1; i++) {
      if(input[i]==document.activeElement) {
        input[i+1].focus();
        break;
      }
      else document.getElementsByName('button').focus();
    }
  }
</script>

</body>
</html>


