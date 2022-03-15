player1name = document.getElementById("player1name").innerHTML = localStorage.getItem("player1");
player2name = document.getElementById("player2name").innerHTML = localStorage.getItem("player2");
questionturn = "player1";
answerturn = "player2";
score1 = 0;
score2 = 0;
function SendValue()
{
    number1 = document.getElementById("inputnum1").value;
    number2 = document.getElementById("inputnum2").value;
    actualanswer = parseInt(number1) * parseInt(number2);

    document.getElementById("num1").innerHTML = number1;
    document.getElementById("num2").innerHTML = number2;
}

function AnswerCheck(){
    ygyagsydgy = document.getElementById("weqweq").value;
    if(ygyagsydgy == actualanswer){
        if(answerturn == "player1"){
            updateplayer1score = score1 + 1;
            document.getElementById("player1score").innerHTML = updateplayer1score;
        }
        else{
            updateplayer2score = score2 + 1;
            document.getElementById("player2score").innerHTML = updateplayer2score;
        }
    }
    if(questionturn == "player1"){
        questionturn = "player2";
        document.getElementById("wuuw").innerHTML = player2name;
    }
    else{
        questionturn = "player1";
        document.getElementById("wuuw").innerHTML = player1name;
    }
    if(answerturn == "player1"){
        answerturn = "player2";
        document.getElementById("uwwu").innerHTML = player2name;
    }
    else{
        answerturn = "player1";
        document.getElementById("uwwu").innerHTML = player1name;
    }
}