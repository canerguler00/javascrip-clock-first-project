let username = prompt("Kullanıcı Adı Giriniz:").toUpperCase();

if (username.length > 0){
    document.getElementById("name").innerHTML = username
} else {
    alert("Bilgi Yok")
}

var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
 
  span.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
}

setInterval(time, 1000);

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()].toUpperCase();
document.getElementById("span2").innerHTML = day;
