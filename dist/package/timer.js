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
            console.log("O timer começou");
            _this.startBtn.classList.toggle("hide");
            _this.pauseBtn.classList.toggle("hide");
            _this.status = true;
            setInterval(function () {
                if (_this.status === true) {
                    switch (true) {
                        case _this.second === 60:
                            _this.minute++;
                            _this.second = 0;
                            break;
                        case _this.minute === 60:
                            _this.hour++;
                            _this.minute = 0;
                            break;
                        default:
                            _this.second++;
                    }
                }
                _this.secondSpan.textContent = _this.second < 10 ? "0".concat(_this.second.toString()) : _this.second.toString();
                _this.minuteSpan.textContent = _this.minute < 10 ? "0".concat(_this.minute.toString()) : _this.minute.toString();
                _this.hourSpan.textContent = _this.hour < 10 ? "0".concat(_this.hour.toString()) : _this.hour.toString();
            }, 1000);
        });
    };
    Timer.prototype.pauseTime = function () {
        var _this = this;
        this.pauseBtn = document.getElementById("pauseBtn");
        this.resumeBtn = document.getElementById("resumeBtn");
        this.pauseBtn.addEventListener("click", function () {
            // console.log("O timer parou");
            _this.status = false;
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
            _this.status = true;
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
            _this.status = false;
            _this.second = 0;
            _this.minute = 0;
            _this.hour = 0;
            _this.secondSpan.textContent = "0".concat(_this.second.toString());
            _this.minuteSpan.textContent = "0".concat(_this.minute.toString());
            _this.hourSpan.textContent = "0".concat(_this.hour.toString());
        });
    };
    return Timer;
}());
var timer = new Timer();
timer.startTime();
timer.pauseTime();
timer.resumeTime();
timer.resetTime();
