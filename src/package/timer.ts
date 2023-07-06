class Timer {

    second: number = 0;
    minute: number = 0;
    hour: number = 0;

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
            // console.log("O timer começou");

            this.startBtn.classList.toggle("hide");
            this.pauseBtn.classList.toggle("hide");

            setInterval(()=>{

                this.setTime();

                this.secondSpan.innerHTML = this.second.toString();
                this.minuteSpan.innerHTML = this.minute.toString();
                
            }, 300);

        })
    }

    pauseTime():void {

        this.pauseBtn = document.getElementById("pauseBtn") as HTMLButtonElement;
        this.resumeBtn = document.getElementById("resumeBtn") as HTMLButtonElement;

        this.pauseBtn.addEventListener("click", ()=>{
            // console.log("O timer parou");

            this.pauseBtn.classList.toggle("hide");
            this.resumeBtn.classList.toggle("hide");

        })

    }

    resumeTime():void {

        this.resumeBtn = document.getElementById("resumeBtn") as HTMLButtonElement;
        this.pauseBtn = document.getElementById("pauseBtn") as HTMLButtonElement;

        this.resumeBtn.addEventListener("click", ()=>{
            // console.log("O timer continou");

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
            
        })

    }

    setTime():void {
        this.second++;
        
        if (this.second === 60) {
            this.minute++;
            this.second = 0;
        }

    }

}

let timer = new Timer();
timer.startTime();
timer.pauseTime();
timer.resumeTime();
timer.resetTime();