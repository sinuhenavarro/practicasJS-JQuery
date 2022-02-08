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
    .title {
      font-family: "Ubuntu Condensed", sans-serif;
      font-weight: bold;
    }
  </style>
</head>
<body onload="cleanLetters()">
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
    //print_r($jsArray);

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
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-sm-2 col-lg-3"></div>
    <div class="col-12 col-sm-8 col-lg-6">
      <br>
      <img src="img/ubuntu-512.png" class="rounded mx-auto d-block" alt="logo" style="width: 120px;">
      <h1 class="display-4 text-center">LETRITAS</h1>
      <h6 class="text-muted text-center" style="font-variant: small-caps;">ADIVINA LA PALABRA</h6>
      <br>
      <form class="form-inline" action="index.html" method="post">
        <div class="input-group">
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter"/>
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter"/>
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter"/>
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter"/>
          <input type="text" name="array[]" maxlength="1" value="" class="form-control inputLetter"/>
          <button type="button" id="boton" class="form-control" onclick="check();">
            <img src="img/ok-32.png" class="rounded mx-auto d-block" alt="check">
          </button>
          <button type="button" id="clean" class="form-control" onclick="cleanLetters();">
            <img src="img/x-mark-3-32.png" class="rounded mx-auto d-block" alt="clean">
          </button>
        </div>
      </form>
    </div>
    <div class="col-12 col-sm-2 col-lg-3"></div>
  </div>
</div>
<script type="text/javascript" src="js/jquery-3.6.0.min.js"></script>
<script type="text/javascript">
  var input = document.getElementsByName('array[]');
  var lastLetterIndex = input.length - 1;  

  function checkIfItIsInAnotherPlace(word,position) {
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

  function check() {
    var word = <?php echo $wordOfTheDay; ?>;

    for (var i = 0; i < input.length; i++) {
      var a = input[i];
      if(input[i].value.toUpperCase() == word[i] ) {
        input[i].style.backgroundColor = "#00B74A";
        input[i].style.color = "#FBFBFB";        
      } else {
        checkIfItIsInAnotherPlace(word,i);
      }
    }
  }

  function cleanLetters() {
    for (var i = 0; i < input.length; i++) {
        input[i].value = "";
        input[i].style.backgroundColor = "#FBFBFB";
        input[i].style.color = "#333";           
      }
    input[0].focus();      
  }

  $(function() {
    $("input").keypress(function(e) {
      if(e.which != 8 && e.which!=46) {
        for (var i = 0; i < lastLetterIndex; i++) {
          if(input[i]==document.activeElement) {
            input[i+1].focus();
            break;
          }
        }
        if(i==lastLetterIndex) {
          document.getElementById('boton').focus();
        }
      }
    });
    
    $("input").keyup(function(e) {
      if(e.which==229) $(this).keypress();
    });

    $("input").keydown(function(e) {
      if(e.which == 8) {
        for (var i = input.length; i > -1; i--) {
          if(input[i]==document.activeElement) {
            input[i].value = "";
            input[i].style.backgroundColor = "#FBFBFB";
            input[i].style.color = "#333";              
            if(i>0) input[i-1].focus();
            break;
          }
        }
      }
    });

    $("#boton").keyup(function(e) {
      if(e.which == 8) {
        input[input.length-1].value = "";
        input[input.length-1].focus();
      }
    });

  });   

</script>

</body>
</html>


