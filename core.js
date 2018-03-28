const info = navigator.userAgent;
var mo;
var devn;
if (info.indexOf('Mobile') !== -1) {  //Client Device Detection
  mo = '1';
  devn = 'Mobile';
} else if (info.indexOf('Xbox') !== -1) {
    mo = '2';
    devn = 'Xbox';
  } else if (info.indexOf('PlayStation') !== -1) {
      mo = '3';
      devn = 'PlayStation';
    } else {
      mo = '0';
      devn = 'Computer';
    }
var brow;
var brown;
if (info.indexOf('MSIE') !== -1) {  //Client Browser Detection
  brow = '0';
  brown = 'Microsoft Internet Explorer';
} else if (info.indexOf('Trident') !== -1) {
    brow = '0';
    brown = 'Microsoft Internet Explorer';
  } else if (info.indexOf('Edge') !== -1) {
      brow = '1';
      brown = 'Microsoft Edge';
    } else if (info.indexOf('OPR') !== -1) {
        brow = '2';
        brown = 'Opera';
      } else if (info.indexOf('Firefox') !== -1) {
          brow = '3';
          brown = 'Mozila Firefox';
        } else if (info.indexOf('Chrome') !== -1) {
            brow = '4';
            brown = 'Google Chrome';
          } else if (info.indexOf('Safari') !== -1) {
              brow = '5';
              brown = 'Apple Safari';
            } else {
              brow = '6';
              brown = 'Unknown Web Browser';
            }
var oper;
var operabil;
var opern;
if (info.indexOf('Windows NT 6.1') !== -1) {  //Client Operation System Detection
  oper = '1';
  operabil = '1';
  opern = 'Windows 7';
} else if (info.indexOf('Windows NT 6.2') !== -1) {
    oper = '2';
    operabil = '1';
    opern = 'Windows 8';
  } else if (info.indexOf('Windows NT 6.3') !== -1) {
      oper = '3';
      operabil = '1';
      opern = 'Windows 8.1';
    } else if (info.indexOf('Windows NT 10.0') !== -1) {
        oper = '4';
        operabil = '1';
        opern = 'Windows 10';
      } else if (info.indexOf('Windows Phone 10') !== -1) {
          oper = '5';
          operabil = '1';
          opern = 'Windows 10 Mobile';
        } else if (info.indexOf('Windows NT') !== -1) {
            oper = '0';
            operabil = '0';
            opern = 'Windows Vista 이하';
          } else if (info.indexOf('Windows Phone') !== -1) {
              oper = '6';
              operabil = '0';
              opern = 'Windows Phone 8.1 이하';
            } else if (info.indexOf('Windows Mobile') !== -1) {
                oper = 'e';
                operabil = '0';
                opern = 'Windows Mobile 7.5 이하';
              } else if (info.indexOf('Windows') !== -1) {
                  oper = '7';
                  operabil = '0';
                  opern = '기타 Windows';
                } else if (info.indexOf('Android') !== -1) {
                    oper = '8';
                    operabil = '1';
                    opern = 'Android';
                  } else if (info.indexOf('Linux') !== -1) {
                      oper = '8';
                      operabil = '1';
                      opern = 'Linux';
                    } else if (info.indexOf('iPhone OS') !== -1) {
                        oper = '9';
                        operabil = '1';
                        opern = 'iOS';
                      } else if (info.indexOf('CPU OS') !== -1) {
                          oper = 'a';
                          operabil = '1';
                          opern = 'iOS(iPad)';
                        } else if (info.indexOf('Mac OS X') !== -1) {
                            oper = 'b';
                            operabil = '1';
                            opern = 'macOS';
                          } else if (info.indexOf('Mac OS') !== -1) {
                              oper = 'c';
                              operabil = '0';
                              opern = 'Mac OS';
                            } else {
                              oper = 'd';
                              operabil = '2';
                              opern = 'Unknown Operation System';
                            }
var bit;
var bitn;
if (info.indexOf('x64') !== -1) { //Client Operation System Bit Detection
  bit = '1';
  bitn = '64bit';
} else if (info.indexOf('WOW64') !== -1) {
    bit = '1';
    bitn = '64bit';
  } else {
    bit = '0';
    bitn = '32bit';
  }
