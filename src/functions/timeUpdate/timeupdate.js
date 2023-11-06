import store from "redux/store";
import { setTodayDate } from "redux/reducers";
import dayjs from "dayjs";

export default function timeUpdate(){
    setInterval(function(){
        store.dispatch(setTodayDate(dayjs().format('DD-MM-YYYY')))
        //console.log(dayjs().format('DD-MM-YYYY'))
    },30000)
}