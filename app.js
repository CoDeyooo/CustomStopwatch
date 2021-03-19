function stopwatch(){
    let startButton = document.getElementById("startBtn");
    let stopButton = document.getElementById("stopBtn");
    let resetButton = document.getElementById("resetBtn");
    startButton.addEventListener("click", start);
    stopButton.addEventListener("click", stop);
    resetButton.addEventListener("click", reset);

    let time = document.getElementById("time");
    let seconds = 0; let minutes = 0; let milliseconds = 0; let hours = 0;
    let intervalSeconds; let intervalMinutes; let intervalMilliSeconds; let intervalHours;

    function addHour(){
        hours++;
        minutes = 0; seconds = 0; milliseconds = 0;
        setStopwatchFormat();
    }

    function addMinute(){
        minutes++;
        seconds = 0; milliseconds = 0;
        setStopwatchFormat();
    }

    function addSecond(){
        seconds++;
        milliseconds = 0;
        setStopwatchFormat();
    }

    function addMilliSecond(){
        milliseconds++;
        setStopwatchFormat();
    }

    function start(){
        intervalMilliSeconds = setInterval(addMilliSecond, 10);
        intervalSeconds = setInterval(addSecond, 1000);
        intervalMinutes = setInterval(addMinute, 60000);
        intervalHours = setInterval(addHour, 3600000)
        stopButton.disabled = false;
        startButton.disabled = true;
    }

    function stop(){
        clearInterval(intervalHours)
        clearInterval(intervalMilliSeconds);
        clearInterval(intervalSeconds);
        clearInterval(intervalMinutes);
        stopButton.disabled = true;
        startButton.disabled = false;
    }

    function reset(){
        stop();
        hours = 0;
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        setStopwatchFormat();
    }

    function format(number){
        if (number < 10){
            return "0" + number.toString();
        }

        return number.toString();
    }

    function setStopwatchFormat (){
        time.textContent =`${format(hours)}:${format(minutes)}:${format(seconds)}:${format(milliseconds*10)}`;
    }
}