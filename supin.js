/*jshint esversion: 9 */
class SuPin {
  constructor() {
    this.info = navigator.userAgent;
  }

  deviceInfo() {
    let mo;
    if (this.info.indexOf('Mobile') !== -1) { //Client Device Detection
      mo = '1';
    } else if (this.info.indexOf('Xbox') !== -1) {
      mo = '2';
    } else if (this.info.indexOf('PlayStation') !== -1) {
      mo = '3';
    } else {
      mo = '0';
    }
    return mo;
  }

  browserInfo() {
    let brow;
    if (this.info.indexOf('MSIE') !== -1 || this.info.indexOf('Trident') !== -1) { //Client Browser Detection
      brow = '0';
    } else if (this.info.indexOf('Edge') !== -1) {
      brow = '1';
    } else if (this.info.indexOf('OPR') !== -1) {
      brow = '2';
    } else if (this.info.indexOf('Firefox') !== -1) {
      brow = '3';
    } else if (this.info.indexOf('Whale') !== -1) {
      brow = '4';
    } else if (this.info.indexOf('Chrome') !== -1) {
      brow = '5';
    } else if (this.info.indexOf('Safari') !== -1) {
      brow = '6';
    } else {
      brow = '7';
    }
    return brow;
  }

  OSInfo() {
    let oper;
    if (this.info.indexOf('Windows NT 6.1') !== -1) { //Client Operation System Detection
      oper = '1';
    } else if (this.info.indexOf('Windows NT 6.2') !== -1) {
      oper = '2';
    } else if (this.info.indexOf('Windows NT 6.3') !== -1) {
      oper = '3';
    } else if (this.info.indexOf('Windows NT 10.0') !== -1) {
      oper = '4';
    } else if (this.info.indexOf('Windows Phone 10') !== -1) {
      oper = '5';
    } else if (this.info.indexOf('Windows NT') !== -1) {
      oper = '0';
    } else if (this.info.indexOf('Windows Phone') !== -1) {
      oper = '6';
    } else if (this.info.indexOf('Windows Mobile') !== -1) {
      oper = 'e';
    } else if (this.info.indexOf('Windows') !== -1) {
      oper = '7';
    } else if (this.info.indexOf('Android') !== -1) {
      oper = '8';
    } else if (this.info.indexOf('Linux') !== -1) {
      oper = '9';
    } else if (this.info.indexOf('iPhone OS') !== -1) {
      oper = 'a';
    } else if (this.info.indexOf('CPU OS') !== -1) {
      oper = 'b';
    } else if (this.info.indexOf('Mac OS X') !== -1) {
      oper = 'c`';
    } else if (this.info.indexOf('Mac OS') !== -1) {
      oper = 'd';
    } else {
      oper = 'f';
    }
    return oper;
  }

  DoNoteAbil(code) {
    let operabil;
    switch (code) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '8':
      case '9':
      case 'a':
      case 'b':
      case 'c':
        operabil = 1;
        break;
      case 'f':
        operabil = 2;
        break;
      default:
        operabil = 0;
        break;
    }
    return operabil;
  }

  bitInfo() {
    let bit;
    if (this.info.indexOf('x64') !== -1 || this.info.indexOf('WOW64') !== -1 || this.info.indexOf('Win64') !== -1) { //Client Operation System Bit Detection
      bit = 1;
    } else {
      bit = 0;
    }
    return bit;
  }
}