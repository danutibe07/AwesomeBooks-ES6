import { DateTime } from './luxon.js';
const timeis = document.getElementById('time');
const setTime = () => {
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  timeis.textContent = date;
};

setInterval(setTime, 1000);