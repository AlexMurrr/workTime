const startWorkDay = new Date(2021, 10, 22, 8);
const countMsInDay = 24 * 60 * 60 * 1000;
// const dateList = {};

const inputDate = document.getElementById('date');
const res = document.getElementById('res');
const elem = document.getElementById('elem');
const dayOfScheduleH2 = document.getElementById('dayOfSchedule');
const garbageH2 = document.getElementById('garbage');

elem.onclick = function dayWork() {
  const dayOfWork = Math.floor(
    (new Date(inputDate.value).getTime() + countMsInDay / 3 - startWorkDay)
      / countMsInDay,
  ) % 3;
  if (dayOfWork === 0) {
    res.textContent = 'В этот день вы должны быть на работе';
  } if (dayOfWork === 1) {
    res.textContent = 'Этот день - отсыпной';
  } else if (dayOfWork === 2) {
    res.textContent = 'Этот день - выходной';
  }
};

const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const daysWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

const nowDay = document.getElementById('now day');
const nowDate = document.getElementById('now date');

const dateNow = new Date();

nowDay.textContent = `Сегодня ${daysWeek[dateNow.getDay()].toUpperCase()}`;

nowDate.textContent = `${dateNow.getDate()} ${months[dateNow.getMonth()]} ${dateNow.getFullYear()}`;

const countMsFromWorkDay = new Date() - startWorkDay;

const dayOfSchedule = Math.floor(countMsFromWorkDay / countMsInDay) % 3;

if (dayOfSchedule === 0) {
  dayOfScheduleH2.textContent = 'Вы должны быть на работе';
} else if (dayOfSchedule === 1) {
  dayOfScheduleH2.textContent = 'Сегодня отсыпной, завтра выходной';
} else if (dayOfSchedule === 2) {
  dayOfScheduleH2.textContent = 'Выходной, а завтра на работу';
}

const workTimeOnShift = dateNow.getTime() - countMsInDay / 3; // get name work shift from 00:00
const dateWorkTime = new Date(workTimeOnShift);
const dayOfWork = dateWorkTime.getDay();

if ((dayOfSchedule === 0 && daysWeek[dayOfWork] === 'Суббота') || (dayOfSchedule === 0 && daysWeek[dayOfWork] === 'Понедельник') || (dayOfSchedule === 0 && daysWeek[dayOfWork] === 'Четверг')) {
  garbageH2.textContent = 'С утра вывезти мусор';
}
