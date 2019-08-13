var khmerGame = () => {
    let mix = Math.floor(Math.random() * 6) + 1;
    let mix1 = Math.floor(Math.random() * 6) + 1;
    let mix2 = Math.floor(Math.random() * 6) + 1;
    let output = "";
    let output1 = "";
    let output2 = "";

    let users = document.getElementsByClassName('game');
    let userChecked = "";
    for (let i = 0; i < users.length; i++) {
        if (users[i].checked) {
            if (users[i].value == mix)
                userChecked = users[i].value;
                alert("Congratulation");
        }
    }
    switch (mix) {
        case 1:
        output = "<img src='images/1.png' style='width:100px;'>";
        break;
        case 2:
        output = "<img src='images/2.png' style='width:100px;'>";
        break;
        case 3:
        output = "<img src='images/3.png' style='width:100px;'>";
        break;
        case 4:
        output = "<img src='images/4.png' style='width:100px;'>";
        break;
        case 5:
        output = "<img src='images/5.png' style='width:100px;'>";
        break;
        case 6:
        output = "<img src='images/6.png' style='width:100px;'>";
        break;
    }
    switch (mix1) {
        case 1:
        output1 = "<img src='images/1.png' style='width:100px;'>";
        break;
        case 2:
        output1 = "<img src='images/2.png' style='width:100px;'>";
        break;
        case 3:
        output1 = "<img src='images/3.png' style='width:100px;'>";
        break;
        case 4:
        output1 = "<img src='images/4.png' style='width:100px;'>";
        break;
        case 5:
        output1 = "<img src='images/5.png' style='width:100px;'>";
        break;
        case 6:
        output1 = "<img src='images/6.png' style='width:100px;'>";
        break;
    }
    switch (mix2) {
        case 1:
        output2 = "<img src='images/1.png' style='width:100px;'>";
        break;
        case 2:
        output2 = "<img src='images/2.png' style='width:100px;'>";
        break;
        case 3:
        output2 = "<img src='images/3.png' style='width:100px;'>";
        break;
        case 4:
        output2 = "<img src='images/4.png' style='width:100px;'>";
        break;
        case 5:
        output2 = "<img src='images/5.png' style='width:100px;'>";
        break;
        case 6:
        output2 = "<img src='images/6.png' style='width:100px;'>";
        break;
    }
    let result = document.getElementById("result"); 
    setTimeout(() => {
        result.innerHTML = output + " " + output1 + " " + output2;
    }, 1000);
  
    
}
//clear result
var playAgain = () => {
    let result = document.getElementById("result");
    result.innerHTML = "";
}
var clear = document.getElementById("clear");
clear.addEventListener('click', playAgain);
var playGame = document.querySelector("#play");
playGame.addEventListener('click', khmerGame);