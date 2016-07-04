// ==UserScript==
// @name        AHK-Forum display solved h3 title
// @namespace   autohotkey.com
// @include     http://autohotkey.com/boards/viewtopic.php*
// @include     https://autohotkey.com/boards/viewtopic.php*
// @version     1
// @grant       none
// @author      joedf
// timestamp 15:11 2016/06/24
// ==/UserScript==
if (document.contains(document.getElementsByClassName('icon_solved_post') [0])) {
  window.onload = function () {
    p = document.getElementsByClassName('postbody');
    n = p.length;
    for (i = 0; i < n; i++) {
      if (p[i].getElementsByTagName('h3') [0].contains(document.getElementsByClassName('icon_solved_post') [0])) {
        p[i].getElementsByTagName('h3') [0].style.display = 'inline';
        m = p[i].getElementsByTagName('div') [0];
        m.style.border = '2px solid lime';
        m.style.padding = '4px';
        m.style.backgroundColor = 'lightgoldenrodyellow';
        break;
      }
    }
  }
}
