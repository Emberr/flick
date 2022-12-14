//xmlhttp request for databse.json
var xmlhttp = new XMLHttpRequest();
var url = "database.json";

//put form data from index.html into database.json 
const addData = (action) => {
    action.preventDefault();
    var referee = document.getElementById("referee").value;
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    var score1 = document.getElementById("score1").value;
    var score2 = document.getElementById("score2").value;
    var date = Date.now();
    var data = {
        "referee": referee,
        "player1": player1,
        "player2": player2,
        "score1": score1,
        "score2": score2,
        "date": date
    };
    //request to send data to database.json
    
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            displayData(myArr);
        }
    }

}

document.getElementById("submit").addEventListener("click", addData);


//display data from database.json in index.html
function displayData(arr) {
    var out = "";
    var i;
    for (i = 0; i < arr.length; i++) {
        out += '<tr><td>' + arr[i].referee + '</td><td>' + arr[i].player1 + '</td><td>' + arr[i].player2 + '</td><td>' + arr[i].score1 + '</td><td>' + arr[i].score2 + '</td><td>' + arr[i].date + '</td></tr>';
    }
    document.getElementById("data").innerHTML = out;
}