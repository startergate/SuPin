function putDevice(mo){
    let output;
    switch (mo) {
      case 1:
        output = 'Mobile';
        break;
      case 2:
        output = 'Xbox';
        break;
      case 3:
        output = 'PlayStation';
        break;
      default:
        output = 'Computer'
        break;
    }
    document.write(output);
    return 0;
}
function putBrowser(brow) {
  let output;
  switch (brow) {
    case '0':
      output = 'Microsoft Internet Explorer';
      break;
    case '1':
      output = 'Microsoft Edge';
      break;
    case '2':
      output = 'Opera';
      break;
    case '3':
      output = 'Mozila Firefox';
      break;
    case '4':
      output = 'NAVER Whale';
      break;
    case '5':
      output = 'Google Chrome';
      break;
    case '6':
      output = 'Apple Safari';
      break;
    default:
      output = 'Unknown Web Browser';
  }
  document.write(output);
  return 0;
}
function putOS(oper){
  let output;
  switch (oper) {
    case '0':
      output = 'Windows Vista 이하';
      break;
    case '1':
      output = 'Windows 7';
      break;
    case '2':
      output = 'Windows 8';
      break;
    case '3':
      output = 'Windows 8.1';
      break;
    case '4':
      output = 'Windows 10';
      break;
    case '5':
      output = 'Windows 10 Mobile';
      break;
    case '6':
      output = 'Windows Phone 8.1 이하'
      break;
    case '7':
      output = '기타 Windows';
      break;
    case '8':
      output = 'Android';
      break;
    case '9':
      output = 'Linux';
      break;
    case 'a':
      output = 'iOS';
      break;
    case 'b':
      output = 'iOS(iPad)';
      break;
    case 'c':
      output = 'macOS';
      break;
    case 'd`':
      output = 'Mac OS';
      break;
    case 'e':
      output = 'Windows Mobile 7.5 이하';
      break;
    default:
      output = 'Unknown Operation System';
      break;
  }
  document.write(output);
}
function putDoNoteAbil(abil) {
  let output;
  switch (abil) {
    case 1:
      output = 'Support';
      break;
    case 2:
      output = 'Unknown'
      break;
    default:
      output = 'No Support'
      break;
  }
  document.write(output);
  return 0;
}
function putBit(bit) {
  let output;
  switch (bit) {
    case 1:
      output = '64bit';
      break;
    case 0:
      output = '32bit';
      break;
  }
  document.write(output);
  return 0;
}
