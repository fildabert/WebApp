function startGame(){
    for(var i = 1; i<= 9; i++){
        restartGame(i)
    }
    document.turn = "X";
    document.winner = null;
    displayMessage(document.turn + " starts first!")
}

function nextMove(box){
    if(document.winner != null){
        displayMessage(document.winner + " has won, please restart the game")
    }
    else if(checkForTie()){
        for(var i = 1; i <= 9; i++){
            document.getElementById(i).style.backgroundColor = "red";
        }
        displayMessage("Game is tied, please restart the game")
    }
    else if(box.innerText === ""){
        box.innerText = document.turn;
        changeTurn();
    }
    else{
        displayMessage("Pick another box!")
    }
}

function changeTurn(){
    if(winCheck(document.turn)){
        displayMessage(document.turn +" is the winner!");
        document.winner = document.turn
    }
    else if(document.turn === "X"){
        document.turn = "O";
        displayMessage("It's " + document.turn + "'s turn GO!");
    }
    else{
        document.turn = "X";
        displayMessage("It's " + document.turn + "'s turn GO!");
    }
}

function displayMessage(text){
    document.getElementById("message").innerText = text;
}

function checkBox(num){
    return document.getElementById(num).innerText;
}

function checkRow(a, b, c, move){
    var win = false;
    if(checkBox(a) == move && checkBox(b) == move && checkBox(c) == move){
        win = true
        var backgroundA = document.getElementById(a)
        var backgroundB = document.getElementById(b) 
        var backgroundC = document.getElementById(c)
        backgroundA.style.backgroundColor = "green";  
        backgroundB.style.backgroundColor = "green"; 
        backgroundC.style.backgroundColor = "green"; 
    }
    return win
}

function winCheck(move){
    var win = false
    if(checkRow(1, 2, 3, move) ||
       checkRow(4, 5, 6, move) ||
       checkRow(7, 8, 9, move) ||
       checkRow(1, 4, 7, move) ||
       checkRow(2, 5, 8, move) ||
       checkRow(3, 6, 9, move) ||
       checkRow(1, 5, 9, move) ||
       checkRow(3, 5, 7, move)){
        win = true
       }
    return win
}

function restartGame(num){
    document.getElementById(num).style.backgroundColor = "white";
    return document.getElementById(num).innerText = "";
}

function checkForTie(){
    var count = 0;
    for(var i = 1; i <= 9; i++){
        if(document.getElementById(i).innerText !== ""){
            count++
        }
    }
    if(count === 9){
        return true
    }
    return false
}