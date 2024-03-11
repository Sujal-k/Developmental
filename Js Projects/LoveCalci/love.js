const btn = document.getElementById('calculator-button');
const btn2 = document.getElementById('calculator-fb-like');

btn.addEventListener('click', function () {
  var loveScore = Math.floor(Math.random() * 100) + 1;
  alert("Your love score is : " + loveScore + "%");
  
  // Trigger click event on calculator-fb-like button
  btn2.click();
});

btn2.addEventListener('click', function () {
  var loveScore = Math.floor(Math.random() * 100) + 1;
  alert("Your love score is : " + loveScore + "%");
});
