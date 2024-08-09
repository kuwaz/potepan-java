const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let intervalId;

function updateTime() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const hours = Math.floor(elapsedTime / 3600000);
  const minutes = Math.floor((elapsedTime % 3600000) / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = elapsedTime % 1000;
  display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

startButton.addEventListener('click', () => {
  startTime = new Date().getTime();
  intervalId = setInterval(updateTime, 10);
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
});

stopButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  startTime = null;
  display.textContent = '00:00:00';
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});
