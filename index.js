function updateClock() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var day = today.getDate();
    var monthIndex = today.getMonth();
    var year = today.getFullYear();

    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;
    document.querySelector(".date").innerHTML = day;
    document.querySelector(".month").innerHTML = monthNames[monthIndex];
    document.querySelector(".year").innerHTML = year;
}

updateClock();

setInterval(updateClock, 1000);
