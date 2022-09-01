const touches = document.querySelectorAll("button");

const ecran = document.querySelector('.text')

let valeurEcran = ecran.innerHTML;

for(var i = 0; i < touches.length; i++) {
	touches[i].onclick = function(e) {
		var ecran = document.querySelector('.text');
		var valeurEcran = ecran.innerHTML;
		var valeurBouton = this.innerHTML;}}