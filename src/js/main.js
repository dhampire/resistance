//timer

var endDate = new Date("Oct 15, 2019 12:00:00").getTime();

var timer = setInterval(function() {

    let now = new Date().getTime();
    let t = endDate - now;
    
    if (t >= 0) {
    
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);
    
        document.getElementById("timer-days").innerHTML = days + "<span class='timer__label'>Días</span>";
    
        document.getElementById("timer-hours").innerHTML = ("0"+hours).slice(-2) + "<span class='timer__label'>Horas</span>";
    
        document.getElementById("timer-mins").innerHTML = ("0"+mins).slice(-2) + "<span class='timer__label'>Minutos</span>";
    
        document.getElementById("timer-secs").innerHTML = ("0"+secs).slice(-2) + "<span class='timer__label'>Segundos</span>";
    
    } else {

        document.getElementById("timer").innerHTML = "Evento realizado";
    
    }
    
}, 1000);

//end timer