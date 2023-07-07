class Timer {

    second: number = 0;
    minute: number = 0;
    hour: number = 0;
    status: boolean;

    secondSpan: HTMLSpanElement;
    minuteSpan: HTMLSpanElement;
    hourSpan: HTMLSpanElement;

    startBtn: HTMLButtonElement;
    pauseBtn: HTMLButtonElement;
    resumeBtn: HTMLButtonElement;
    resetBtn: HTMLButtonElement;

    startTime ():void {

        this.startBtn = document.getElementById("startBtn") as HTMLButtonElement;
        this.pauseBtn = document.getElementById("pauseBtn") as HTMLButtonElement;

        this.secondSpan = document.getElementById("secondSpan");
        this.minuteSpan = document.getElementById("minuteSpan");
        this.hourSpan = document.getElementById("hourSpan");

        this.startBtn.addEventListener("click", ()=>{
            console.log("O timer começou");

            this.startBtn.classList.toggle("hide");
            this.pauseBtn.classList.toggle("hide");
            this.status = true;

            setInterval(()=>{

                if (this.status === true) {
                    
                    switch(true) {
                        case this.second === 60:
                            this.minute++;
                            this.second = 0;
                            break
                        case this.minute === 60:
                            this.hour++;
                            this.minute = 0;
                            break
                        default:
                            this.second++;
                    }

                }

                this.secondSpan.textContent = this.second < 10 ? `0${this.second.toString()}` : this.second.toString();
                this.minuteSpan.textContent = this.minute < 10 ? `0${this.minute.toString()}` : this.minute.toString();
                this.hourSpan.textContent = this.hour < 10 ? `0${this.hour.toString()}` : this.hour.toString();

            }, 1000);

        })
    }

    pauseTime():void {

        this.pauseBtn = document.getElementById("pauseBtn") as HTMLButtonElement;
        this.resumeBtn = document.getElementById("resumeBtn") as HTMLButtonElement;

        this.pauseBtn.addEventListener("click", ()=>{
            // console.log("O timer parou");

            this.status = false;
            this.pauseBtn.classList.toggle("hide");
            this.resumeBtn.classList.toggle("hide");

        })

    }

    resumeTime():void {

        this.resumeBtn = document.getElementById("resumeBtn") as HTMLButtonElement;
        this.pauseBtn = document.getElementById("pauseBtn") as HTMLButtonElement;

        this.resumeBtn.addEventListener("click", ()=>{
            // console.log("O timer continou");

            this.status = true;
            this.resumeBtn.classList.toggle("hide");
            this.pauseBtn.classList.toggle("hide");
        })

    }

    resetTime():void {
        
        this.resetBtn = document.getElementById("resetBtn") as HTMLButtonElement;
        this.startBtn = document.getElementById("startBtn") as HTMLButtonElement;
        this.pauseBtn = document.getElementById("pauseBtn") as HTMLButtonElement;
        this.resumeBtn = document.getElementById("resumeBtn") as HTMLButtonElement;

        this.resetBtn.addEventListener("click", ()=>{
            // console.log("O timer resetou");

            this.startBtn.classList.remove("hide");
            this.pauseBtn.classList.add("hide");
            this.resumeBtn.classList.add("hide");

            this.status = false;
            this.second = 0;
            this.minute = 0;
            this.hour = 0;

            this.secondSpan.textContent = `0${this.second.toString()}`;
            this.minuteSpan.textContent = `0${this.minute.toString()}`;
            this.hourSpan.textContent = `0${this.hour.toString()}`;
            
        })

    }

}

let timer = new Timer();
timer.startTime();
timer.pauseTime();
timer.resumeTime();
timer.resetTime();