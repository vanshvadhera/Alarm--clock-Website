let audio = new Audio("https://paglasongs.com/files/download/id/4632");

let time = document.getElementById("time");
let settingAlarm = document.getElementById("setAlarm");
let stopAlarm = document.getElementById("stopAlarm");

settingAlarm.addEventListener('click', function () {
    let alarmtime = new Date(time.value);
    if (alarmtime != 'Invalid Date') {
        let pesenttime = new Date();

        let diff = alarmtime.getTime() - pesenttime.getTime();
        if (diff > 0) {
            setTimeout(() => {
                audio.play();
            }, diff);
        }

    } else {
        alert('invalid time');
    }
})

stopAlarm.addEventListener('click', function () {
    audio.pause();
})