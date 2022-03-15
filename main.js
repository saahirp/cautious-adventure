function loginTOGAME() {
    yyy = document.getElementById("player1login").value;
    yzy = document.getElementById("player2login").value;
    localStorage.setItem("player1",yyy);
    localStorage.setItem("player2",yzy);

    window.location = "gamearea.html";
}