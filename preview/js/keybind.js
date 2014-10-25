'use strict';

(function(_doc, _win) {
  console.log('init');
  _win.addEventListener("keydown" , function(e) {
    console.log('key='+e);
    //e = e || _win.event;

    var keyCode = e.keyCode;
    var shiftKey = e.shiftKey;
    var ctrlKey = e.ctrlKey;
    var altKey = e.altKey;

    var scrollHeight = 50;

    switch (keyCode) {
      case 74: // j
        _win.scrollBy(0,scrollHeight);
        break;
      case 75: // k
        _win.scrollBy(0,scrollHeight * -1);
        break;
      case 71: // g
        if (shiftKey) { // G
          _win.scrollTo(0,_doc.body.clientHeight);
        } else { // g
          _win.scrollTo(0,0);
        }
        break;
      default: break;
    }
  });
})(document, window);
