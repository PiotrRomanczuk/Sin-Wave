console.log('String')



const startNumber = function(){
    return Math.floor(Math.random(0, 500))
};




setInterval(function(){
  random = (Math.floor((Math.random())+1));
  var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
  random = random * plusOrMinus; 
  currentnumber = document.getElementById('number');

  document.getElementById('number').innerHTML =  parseInt(currentnumber.innerHTML) + random;

}, 1000);