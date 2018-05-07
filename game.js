 
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];   
var randomLetter = alphabet[Math.floor(Math.random() * 26)]
    console.log(randomLetter);
var wins = 0;
var losses = 0; 
var remaining = 9;
document.onkeypress = function(event) {
        var newElement = document.createElement("p");
        newElement.textContent = event.key;
        document.getElementById("guesses").append(newElement);
                
        if (randomLetter == newElement.textContent){
           wins ++;
        } 
        else {
            losses ++;
        }
        if(remaining){
            remaining --;
        }
        document.getElementById('wins').innerHTML = " " + wins;
        document.getElementById('losses').innerHTML = " " + losses;
        document.getElementById('remaining').innerHTML = " " + remaining;
        // i was thinking of adding a for loop to reset the game after it reaches the maximum 9 guesses 
        //  but i wasnt sure how to add it into the code??
}


