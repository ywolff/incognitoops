const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');

chrome.storage.sync.get(['minutes', 'hours'], (result) => {
    hoursInput.value = result.hours || 0;
    minutesInput.value = result.minutes || 0;
});

hoursInput.onchange = (event) => chrome.storage.sync.set({hours: event.target.value});
minutesInput.onchange = (event) => chrome.storage.sync.set({minutes: event.target.value});

hoursInput.onkeyup = (event) => {
  if (event.key === 'Enter') {
    window.close();
  }
};
minutesInput.onkeyup = (event) => {
  if (event.key === 'Enter') {
    window.close();
  }
};
