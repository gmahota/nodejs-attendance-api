import moment from "moment";


const dateAddYear = (date: Date, years: number) => {

  const dateNew:Date  = new Date( moment(date).add(years, 'years').format());

  return dateNew
}

const dateAddMonth = (date: Date, months: number) => {
  return moment(date).add(months, 'months').format();
}

const dateAddDays = (date: Date, days: number) => {
  return moment(date).add(days, 'days').format();
}


const getAllDays = (dateBegin: Date, dateEnd: Date) => {
  let allDays = [];
  let date = moment(dateBegin).format('YYYY-MM-DD');
  let dateE = moment(dateEnd).format('YYYY-MM-DD');
  while (date <= dateE) {
    allDays.push(date);
    date = moment(date).add(1, 'days').format('YYYY-MM-DD');
  }
  return allDays;
}

const getEventsFormShift = (dateBegin: Date, dateEnd: Date, dayOfWeek: number) => {

  let daysCollection = getAllDays(dateBegin, dateEnd)
    .filter(day => dayOfWeek === moment(day).day())

  return daysCollection
}

const sumDateAndTime = (date: Date, dateAndTime: Date) => {
  let time = moment(dateAndTime).format('HH:mm');
  let dateTime = moment(date).format('YYYY-MM-DD') + ' ' + time;

  return moment(dateTime).format();
}

export default {
  getEventsFormShift,
  getAllDays,
  sumDateAndTime,
  dateAddYear,
  dateAddMonth,
  dateAddDays
}
