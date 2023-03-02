var btnMomo = document.getElementById('btn-momo')
var countdown = document.getElementById("countdown");
var count = 100;

btnMomo.addEventListener('click', function() { 
    console.log('->', btnMomo)
    
    var interval = setInterval(function() {
        countdown.innerHTML = count;
        count--;
        if (count < 0) clearInterval(interval);
    }, 1000);
})
    