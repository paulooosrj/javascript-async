"use strict";

var $e = Array.from(
  document.querySelectorAll('[type="text/javascript-async"]')
);

$e.map(function($el) {
  $el.setAttribute("type", "text/javascript");
  var transform = $el.innerHTML
    .replace(/require/gim, "await require")
    .replace(/import/gim, "await import")
    .replace(/fetch/gim, "await fetch");
  $el.innerHTML = "(async() => { " + transform + " })();";
});