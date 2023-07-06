var Timer = /** @class */ (function () {
    function Timer() {
        this.second = 0;
        this.minute = 0;
        this.hour = 0;
    }
    Timer.prototype.startTime = function () {
        var _this = this;
        this.startBtn = document.getElementById("startBtn");
        this.pauseBtn = document.getElementById("pauseBtn");
        this.secondSpan = document.getElementById("secondSpan");
        this.minuteSpan = document.getElementById("minuteSpan");
        this.hourSpan = document.getElementById("hourSpan");
        this.startBtn.addEventListener("click", function () {
            // console.log("O timer começou");
            _this.startBtn.classList.toggle("hide");
            _this.pauseBtn.classList.toggle("hide");
            setInterval(function () {
                _this.setTime();
                _this.secondSpan.innerHTML = _this.second.toString();
                _this.minuteSpan.innerHTML = _this.minute.toString();
            }, 300);
        });
    };
    Timer.prototype.pauseTime = function () {
        var _this = this;
        this.pauseBtn = document.getElementById("pauseBtn");
        this.resumeBtn = document.getElementById("resumeBtn");
        this.pauseBtn.addEventListener("click", function () {
            // console.log("O timer parou");
            _this.pauseBtn.classList.toggle("hide");
            _this.resumeBtn.classList.toggle("hide");
        });
    };
    Timer.prototype.resumeTime = function () {
        var _this = this;
        this.resumeBtn = document.getElementById("resumeBtn");
        this.pauseBtn = document.getElementById("pauseBtn");
        this.resumeBtn.addEventListener("click", function () {
            // console.log("O timer continou");
            _this.resumeBtn.classList.toggle("hide");
            _this.pauseBtn.classList.toggle("hide");
        });
    };
    Timer.prototype.resetTime = function () {
        var _this = this;
        this.resetBtn = document.getElementById("resetBtn");
        this.startBtn = document.getElementById("startBtn");
        this.pauseBtn = document.getElementById("pauseBtn");
        this.resumeBtn = document.getElementById("resumeBtn");
        this.resetBtn.addEventListener("click", function () {
            // console.log("O timer resetou");
            _this.startBtn.classList.remove("hide");
            _this.pauseBtn.classList.add("hide");
            _this.resumeBtn.classList.add("hide");
        });
    };
    Timer.prototype.setTime = function () {
        this.second++;
        if (this.second === 60) {
            this.minute++;
            this.second = 0;
        }
    };
    return Timer;
}());
var timer = new Timer();
timer.startTime();
timer.pauseTime();
timer.resumeTime();
timer.resetTime();
