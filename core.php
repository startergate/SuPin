<?php
  $info = $_SERVER['HTTP_USER_AGENT'];
  if (strpos($info, 'Mobile') !== false) {  //Client Device Detection
    $mo = '1';
    $devn = 'Mobile';
  } elseif (strpos($info, 'Xbox') !== false) {
      $mo = '2';
      $devn = 'Xbox';
    } elseif (strpos($info, 'PlayStation') !== false) {
        $mo = '3';
        $devn = 'PlayStation';
      } else {
        $mo = '0';
        $devn = 'Computer';
      }
  if (strpos($info, 'MSIE') !== false) {  //Client Browser Detection
    $brow = '0';
    $brown = 'Microsoft Internet Explorer';
  } elseif (strpos($info, 'Trident') !== false) {
      $brow = '0';
      $brown = 'Microsoft Internet Explorer';
    } elseif (strpos($info, 'Edge') !== false) {
        $brow = '1';
        $brown = 'Microsoft Edge';
      } elseif (strpos($info, 'OPR') !== false) {
          $brow = '2';
          $brown = 'Opera';
        } elseif (strpos($info, 'Firefox') !== false) {
            $brow = '3';
            $brown = 'Mozila Firefox';
          } elseif (strpos($info, 'Chrome') !== false) {
              $brow = '4';
              $brown = 'Google Chrome';
            } elseif (strpos($info, 'Safari') !== false) {
                $brow = '5';
                $brown = 'Apple Safari';
              } else {
                $brow = '6';
                $brown = 'Unknown Web Browser';
              }
  if (strpos($info, 'Windows NT 6.1') !== false) {  //Client Operation System Detection
    $oper = '1';
    $operabil = '1';
    $opern = 'Windows 7';
  } elseif (strpos($info, 'Windows NT 6.2') !== false) {
      $oper = '2';
      $operabil = '1';
      $opern = 'Windows 8';
    } elseif (strpos($info, 'Windows NT 6.3') !== false) {
        $oper = '3';
        $operabil = '1';
        $opern = 'Windows 8.1';
      } elseif (strpos($info, 'Windows NT 10.0') !== false) {
          $oper = '4';
          $operabil = '1';
          $opern = 'Windows 10';
        } elseif (strpos($info, 'Windows Phone 10') !== false) {
            $oper = '5';
            $operabil = '1';
            $opern = 'Windows 10 Mobile';
          } elseif (strpos($info, 'Windows NT') !== false) {
              $oper = '0';
              $operabil = '0';
              $opern = 'Windows Vista 이하';
            } elseif (strpos($info, 'Windows Phone') !== false) {
                $oper = '6';
                $operabil = '0';
                $opern = 'Windows Phone 8.1 이하';
              } elseif (strpos($info, 'Windows Mobile') !== false) {
                  $oper = 'e';
                  $operabil = '0';
                  $opern = 'Windows Mobile 7.5 이하';
                } elseif (strpos($info, 'Windows') !== false) {
                    $oper = '7';
                    $operabil = '0';
                    $opern = '기타 Windows';
                  } elseif (strpos($info, 'Android') !== false) {
                      $oper = '8';
                      $operabil = '1';
                      $opern = 'Android';
                    } elseif (strpos($info, 'Linux') !== false) {
                        $oper = '8';
                        $operabil = '1';
                        $opern = 'Linux';
                      } elseif (strpos($info, 'iPhone OS') !== false) {
                          $oper = '9';
                          $operabil = '1';
                          $opern = 'iOS';
                        } elseif (strpos($info, 'CPU OS') !== false) {
                            $oper = 'a';
                            $operabil = '1';
                            $opern = 'iOS(iPad)';
                          } elseif (strpos($info, 'Mac OS X') !== false) {
                              $oper = 'b';
                              $operabil = '1';
                              $opern = 'macOS';
                            } elseif (strpos($info, 'Mac OS') !== false) {
                                $oper = 'c';
                                $operabil = '0';
                                $opern = 'Mac OS';
                              } else {
                                $oper = 'd';
                                $operabil = '2';
                                $opern = 'Unknown Operation System';
                              }
  if (strpos($info, 'x64') !== false) { //Client Operation System Bit Detection
    $bit = '1';
    $bitn = '64bit';
  } elseif (strpos($info, 'WOW64') !== false) {
      $bit = '1';
      $bitn = '64bit';
    } else {
      $bit = '0';
      $bitn = '32bit';
    }
?>
