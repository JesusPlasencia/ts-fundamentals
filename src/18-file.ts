import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28);

const newDate = subDays(date, 30);
const frm = format(newDate, "yyyy/MM/dd");

console.log("FECHA:", frm);
