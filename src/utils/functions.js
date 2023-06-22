import 'moment/locale/it';
import moment from 'moment';
export const getFirstLastUpperCase = (str = '') => {
  if (!str) return '';
  const arr = str.split(' ');
  const val = `${arr[0].charAt(0).toUpperCase() + arr[0].slice(1)} ${
    arr[1] ? arr[1].charAt(0).toUpperCase() + arr[1].slice(1) : ''
  }`;
  return val;
};

export const shortDate = date => {
  if (moment().format('DD') == moment(date).format('DD'))
    return moment(date).locale('it').format('h:mm:A');
  return moment(date).locale('it').format('MMM DD YYYY');
};
export const getFullDate = time => {
  return moment(time).locale('en').format('ll');
};
