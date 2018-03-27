<?php
  require("./core.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="apple-touch-icon" sizes="57x57" href="/static/img/favicon/donote/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/static/img/favicon/donote/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/static/img/favicon/donote/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/static/img/favicon/donote/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/static/img/favicon/donote/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/static/img/favicon/donote/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/static/img/favicon/donote/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/static/img/favicon/donote/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/donote/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/static/img/favicon/donote/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/donote/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/static/img/favicon/donote/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/donote/favicon-16x16.png">
    <link rel="manifest" href="/donote/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/static/img/favicon/donote/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <meta name="viewport" content="width=device-width, initial-scale=1 user-scalable=no">
    <title>Support Pin Generater Next Generation</title>
    <link href="/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  	<link rel="stylesheet" type="text/css" href="./style.css?ver=4">
  </head>
  <body id='target'>
      <div class="container">
        <header class="jumbotron text-center">
          <h1><strong>Do</strong>™</h1>
          <h4>Your Support Code</h4>
          <?php
            echo "<h1>";
            echo $mo;
            echo $brow;
            echo $oper;
            echo $bit;
            echo "</h1>";
          ?>
        </header>
      </div>
      <div class="container">
  			<header class="jumbotron text-left margin-erase">
          <?php
          if ($brow == '0') {
            echo "<h5>Web Browser | No Support</h5>";
          } else {
            if ($brow == '6') {
              echo "<h5>Web Browser | Unknown</h5>";
            } else {
              echo "<h5>Web Browser | Support</h5>";
            }
          }
          echo '<br />';
          if ($operabil == '0') {
            echo "<h5>Operation System | No Support</h5>";
          } else {
            if ($operabil == '2') {
              echo "<h5>Operation System | Unknown</h5>";
            } else {
              echo "<h5>Operation System | Support</h5>";
            }
          }
          echo '<br />';
          echo "<h5>Kind of Client Device | ".$devn.'</h5>';
          echo '<br />';
          echo "<h5>Client Web Browser | ".$brown.'</h5>';
          echo '<br />';
          echo "<h5>Client Operation System | ".$opern.'</h5>';
          echo '<br />';
          echo "<h5>Client Bit | ".$bitn.'<h5>';
          echo '<br />';
          echo $_SERVER['HTTP_USER_AGENT'];
        ?>
      </header>
    </div>
    <div class="container">
      <header class="resize jumbotron text-center margin-erase">
        <h5>Copyright by STARTERGATE</h5>
      </header>
    </div>
  </body>
</html>
