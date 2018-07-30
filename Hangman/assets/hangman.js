var answers = ["kobe", "lebron", "steph", "durant"];
var wins = document.getElementById("wincounter");
var guessesLeft = document.getElementById("guesses-left");
var lettersUsedEl = document.getElementById("letters-used");
var progress = document.getElementById("progress");




pickmagicword = function (answers) {
    randomword = [Math.floor(Math.random() * answers.length)];
    magicword = answers[randomword];
    
    
}

pickmagicword (answers);


setprogress = function(magicword) {
    var underscores;
   for (var i = 0; i < magicword.length; i++){
       underscores += '_';
   }
   progress.innerText = underscores;
}

setprogress(magicword); 

