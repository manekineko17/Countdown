//sources : https://www.youtube.com/watch?v=NJVJRFF-Y6U
$(function countDown(){
	var now = new Date();
	var eventDate = new Date(2021, 2, 23);
	//0=janvier, 1 = février, 2 = mars

	var currentTime = now.getTime();
	var eventTime = eventDate.getTime();

	var remTime = eventTime - currentTime;
	//remTime = remaining time

	//conversion de millisecondes en secondes
	//Math.floor : arrondi le nombre entier inférieur ou égal à la valeur passée en argument
	/*floor() est une méthode statique de l'objet Math, elle doit toujours être utilisée avec la syntaxe
	*Math.floor(), elle ne doit pas être utilisée avec un autre objet (Math n'est pas un constructeur)*/
	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	//trouver le remTime avec un modulo
	h %= 24;
	m %= 60;
	s %= 60;

	//rajoute un 0 devant le chiffre si < 10
	/*écriture complète : 
	* if (h < 10){
	*   h="0"+h
	* } */
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	document.getElementById("days").textContent = d;
	//textContent non supporté sur IE
	document.getElementById("days").innerText = d;

	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;

	//appelle la fonction après 1 s
	//la fonction sera exécutée 1 seule fois
	setTimeout(countDown, 1000);
})
console.log("Jquery est prêt");

