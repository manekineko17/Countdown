//sources : https://www.youtube.com/watch?v=NJVJRFF-Y6U
$(function countDown(){
	var now = new Date();
	var eventDate = new Date(2021, 2, 23);

	var currentTime = now.getTime();
	var eventTime = eventDate.getTime();

	var remTime = eventTime - currentTime;

	var s = Math.floor(remTime / 1000);
	var m = Math.floor(s / 60);
	var h = Math.floor(m / 60);
	var d = Math.floor(h / 24);

	h %= 24;
	m %= 60;
	s %= 60;

	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;

	document.getElementById("days").textContent = d;
	document.getElementById("days").innerText = d;

	document.getElementById("hours").textContent = h;
	document.getElementById("minutes").textContent = m;
	document.getElementById("seconds").textContent = s;

	setTimeout(countDown, 1000);
})
console.log("Jquery est prêt");

//si taille écran change => changement fond

//insérer des cercles en css pour faire les : 






/* décompte 543210
/*sources : https://www.freecodecamp.org/news/how-to-create-a-countdown-timer/
*
*  1 : declaring an empty function called startCountdown that takes seconds as an argument
*  2 : We want to keep track of the seconds that pass once the timer is started,
*  so use let to declare a variable called counter and set it equal to seconds
*  3 : Remember that it's best practice to save your timing event function to a variable.
*  This makes it much easier to stop the timer later. Create a variable called interval and
*  set it equal to setInterval() */
/*function startCountdown(seconds) {
    let counter = seconds;

     /*1 : you can pass a function directly to setInterval, so let's pass it an empty arrow function as the
    * first argument. We want the function to run every second, so pass 1000 as the second argument
    * the function we passed to setInterval will run every second
    * 2 : Every time it runs, we want to log the current value of counter to the console before deincrementing it*/
    
/*  const interval = setInterval(() => {
    	console.log(counter);
    	counter--;

    	if (counter < 0 ) { //stop the counter if less than 0
	      	clearInterval(interval); //clear the interval with clearInterval
	      	console.log('Ding!'); // log an alarm sound string to the console
   		}
    }, 1000);  
}
//if you run the function following :
startCountdown(5);
// Console Output
// 5
// 4
// 3
// 2
// 1
// 0 
// Ding!

console.log("Jquery est prêt"); */



















/* 2nd code

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

//time to countdown from
//the setInterval method is used to create a timer
//it is executed at a given interval time (here, 2000 milliseconds)
let countDown = new Date('March 23, 2021 17:00:00').getTime(),
  x = setInterval(function() {

	  	//The new Date gives the current date and time
	    // find the interval between now and the countdown time
	    let now = new Date('March 23, 2021 17:00:00').getTime(),
	      distance = countDown - now;

	    // time calculations for days, hours, minutes and seconds
	    document.getElementById('days').innerText = Math.floor(distance / (day)),
	    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
	    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
	    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  	}, second)

if (second < 10 && minute < 10 && hour < 10 && day < 10) {
  countDown = "0" + countDown;
}

    /*The remaining number of day is calculated using:
	The time interval is divided by 1000 to determine the number of seconds, i.e. timeLeft / 1000
	The time interval then is divided by 60 * 60 * 24 to determine the number of days remaining.
	The Math.floor() function is used to round the number to a whole number.*/

/*    // display the result in the element with id="countDownContainer"
    console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

*/