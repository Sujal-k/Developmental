
    function getRandomDiceNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }  
   var random1 = getRandomDiceNumber();
   var random2 = getRandomDiceNumber();

   var Random_die_img = "images/"+ "dice" + random1 + ".png";
   var img1 = document.querySelectorAll('img')[0];
   img1.setAttribute("src",Random_die_img);

   var Random_die_img2 = "images/"+ "dice" + random2 + ".png";
   var img2 = document.querySelectorAll('img')[1];
   img2.setAttribute("src",Random_die_img2);
   
   //call to see winner at heading
   determineWinner(random1,random2)

   function determineWinner(player1, player2) {
    const heading_winner = document.getElementById('winner');
    if (player1 > player2) {
        heading_winner.innerHTML = "Player 1 Wins!!";
    } else if (player1 === player2) {
        heading_winner.innerHTML = "Draw!!";
    } else {
        heading_winner.innerHTML = "Player 2 Wins!!";
    }
}