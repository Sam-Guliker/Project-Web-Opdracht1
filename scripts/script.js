var aside = document.querySelector('aside');
var fieldset = document.getElementById('inloggen');
var button = document.getElementById('listMenu');
var log = document.getElementById('logIn');
var close = document.querySelector('div');

var show = function(){
  aside.classList.toggle('slide');
};

var logShow = function(){
  fieldset.classList.toggle('slideTop');
};

button.addEventListener('click', show);
close.addEventListener('click', show);
log.addEventListener('click',logShow);
