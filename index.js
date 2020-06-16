document.getElementById("cont").hidden = true;

function randomDices(){

    var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;
    var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    var randomImage2 = "images/dice" + randomNumber2 + ".png";

    var img1 = document.querySelectorAll("img")[0];
    var img2 = document.querySelectorAll("img")[1];

    img1.setAttribute("src", randomImage1);
    img2.setAttribute("src", randomImage2);

    pl1 = document.getElementById("player1").innerText;
    pl2 = document.getElementById("player2").innerText;

    if(randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerText = pl1 + " Nyert!";
    } else if(randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerText = pl2 + " Nyert!";
    } else {
        document.querySelector("h1").innerText = "Döntetlen!";
    }

}

function submitForm() {

    document.getElementById("input").hidden = true;
    document.getElementById("cont").hidden = false;

    var p1 = document.getElementById("play1").value;
    var p2 = document.getElementById("play2").value;

    var player1 = document.getElementById("player1");
    var player2 = document.getElementById("player2");

    player1.innerText = p1;
    player2.innerText = p2;

    randomDices();
    
}