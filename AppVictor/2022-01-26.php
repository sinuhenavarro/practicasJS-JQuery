<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <script src="js/bootstrap.bundle.min.js"></script>
</head>
<body>
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

<div class="container-fluid mt-3">
<?php
  function getJSArrayFromWord($word) {
    $array = str_split($word, 1);
    $jsArray = "['$array[0]','$array[1]','$array[2]','$array[3]','$array[4]']";
    return $jsArray;
  }
  // supuesta consulta SQL para obtener palabra del día
  $wordOfTheDay = getJSArrayFromWord("LUCIO");
?>  
    <h3 id="po">Input Array Elements</h3>  
    <form class="" action="index.html" method="post">
        <input type="text" name="array[]" value="" /><br>
        <input type="text" name="array[]" value="" /><br>
        <input type="text" name="array[]" value="" /><br>
        <input type="text" name="array[]" value="" /><br>
        <input type="text" name="array[]" value="" /><br>
        <button type="button" name="button" onclick="Geeks();">
            Submit
        </button>
    </form> 
         <p id="par"></p>
  <h3>Collapsible Navbar</h3>
  <p>In this example, the navigation bar is hidden on small screens and replaced by a button in the top right corner (try to re-size this window).</p>
  <p>Only when the button is clicked, the navigation bar will be displayed.</p>
  <p>Tip: You can also remove the .navbar-expand-md class to ALWAYS hide navbar links and display the toggler button.</p>
</div>
    <script type="text/javascript">
        var k = "The respective values are :";
        function Geeks() {
          //var word = ['D','I','N','G','O'];
          var word = <?php echo $wordOfTheDay; ?>;
  
            var input = document.getElementsByName('array[]');
           alert(input.length);

  
            for (var i = 0; i < input.length; i++) {
                var a = input[i];
                if(input[i].value == word[i] ) alert("Coincidencia de letra en columna " + i);
                k = k + "array[" + i + "].value= "
                                   + a.value + " ";
            }
  
            document.getElementById("par").innerHTML = k;
            document.getElementById("po").innerHTML = "Output";
        }
    </script>

</body>
</html>


