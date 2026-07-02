const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");
const resetButton = document.getElementById("reset-btn");
const numeros = document.getElementById("stopwatch-display");

class StopWatch {
  #elapsedTimeInSencod = 0;
  intervalId = null;

  start(callback = (time) => {
    numeros.textContent = time;
  }) {
    if (this.intervalId !== null){
      return
    } 
    
    this.intervalId = setInterval(() => {
      this.#elapsedTimeInSencod++;
        callback(this.elapsedTime)
    }, 1000);
  }
  stop(callback = () => {
    
  }) {
    clearInterval(this.intervalId);
    this.intervalId = null
    callback()
  }
  reset(callback = () => {}) {
    if (this.intervalId !== null){
       this.stop()
    this.#elapsedTimeInSencod = 0;
    numeros.textContent = this.elapsedTime
    } else {
       this.stop()
    this.#elapsedTimeInSencod = 0;
    numeros.textContent = this.elapsedTime
    }
   
    callback();
  }

  get elapsedTime() {
    return StopWatch.formatTime(this.#elapsedTimeInSencod);
  }

  static formatTime(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${StopWatch.zeroPadding(hours)}: ${StopWatch.zeroPadding(minutes)}: ${StopWatch.zeroPadding(seconds)}`;
  }

  static zeroPadding(originNunmer, desiredAmountDigits = 2) {
    let stringNumber = String(originNunmer);
    const zeroesRequired = desiredAmountDigits - stringNumber.length;
    if (zeroesRequired <= 0) {
      return stringNumber;
    }

    for (let i = 0; i < zeroesRequired; i++) {
        stringNumber = `0${stringNumber}`
    }

    return stringNumber;
  }
}

const sw1 = new StopWatch();

startButton.addEventListener("click", () => {
  sw1.start();
});

stopButton.addEventListener("click", () => {
  sw1.stop();
});

resetButton.addEventListener("click", () => {
  sw1.reset();
});