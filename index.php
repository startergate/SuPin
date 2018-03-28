<?php
  if (strpos($_SERVER['HTTP_USER_AGENT'], 'Mobile') !== false) {
    header('Location: ./index_ngm.php');
  } else {
    header('Location: ./index_ng.php');
  }
?>
