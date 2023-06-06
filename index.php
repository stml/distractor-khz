<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>The Distractor</title>
	<script language="JavaScript" type="text/javascript" src="jquery.js"></script>
  <script language="JavaScript" type="text/javascript" src="jquery-csv.js"></script>
	<script language="JavaScript" type="text/javascript" src="distractor.js"></script>
	<link type='text/css' rel='stylesheet' href='styles.css?<?=rand();?>'>
  <link rel="icon" type="image/png" href="favicon.png">

</head>

<body style="background: #<?=rand(0,9)?><?=rand(0,9)?><?=rand(0,9)?><?=rand(0,9)?><?=rand(0,9)?><?=rand(0,9)?>">

<div id="container">

<div id="image"></div>

<div id="text">
  <div id="buttons">
     <img class="refresh" src="refresh.svg" title="Refresh">
     <img class="more" src="plus.svg" title="More about this work">
  </div>
  <div id="words">
  <h3 class="date"></h3>
  <h1 class="title"></h1>
  <h2 class="artist"> </h2>
  <p class="provenance"></p>
  <p class="credit">A random work from <a href="https://www.kunsthaus.ch">Kunsthaus Zurich</a> // <a href="http://jamesbridle.com">James Bridle</a> 2023</p>
  </div>
</div>

</div>

</body>
</html>
