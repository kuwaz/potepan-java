const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime;
let elapsedTime = 0; // 経過時間を保持する変数
let intervalId;

function updateTime() {
  const currentTime = new Date().getTime();
  const timeDiff = elapsedTime + (currentTime - startTime); // 経過時間を加算
  const hours = Math.floor(timeDiff / 3600000);
  const minutes = Math.floor((timeDiff % 3600000) / 60000);
  const seconds = Math.floor((timeDiff % 60000) / 1000);
  const milliseconds = timeDiff % 1000;
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
  elapsedTime += new Date().getTime() - startTime; // 経過時間を更新
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener('click', () => {
  clearInterval(intervalId);
  elapsedTime = 0; // 経過時間をリセット
  display.textContent = '00:00:00.000';
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});

