
import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
export function getMonthName(month = dayjs().month()){
    const year = dayjs().year();
    return dayjs(new Date(year, month, 1)).format('MMMM')

}
export function getYear(month = dayjs().month()){
  const year = dayjs().year();
  return dayjs(new Date(year, month, 1)).format('YYYY')
}
export function getCurrDateArr(){
  const currentDate = dayjs()
  return [currentDate.format('DD-MM-YY') ,currentDate.format('DD'), currentDate.format('MM'), currentDate.format('YY')]
}