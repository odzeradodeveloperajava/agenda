import axios from "axios";
import store from "redux/store";
import { toggleUserIsLoggedIn, setLoggedUserDetails, togglePending } from "redux/reducers";

const handler = (res) =>{
    store.dispatch(togglePending(false))
    store.dispatch(setLoggedUserDetails(res.data.email))
    store.dispatch(toggleUserIsLoggedIn(true))
}
const jwtHandler = async (token) =>{
    store.dispatch(togglePending(true))
    if(token !== null){
        try{
            await axios.post('https://socialback.bieda.it/pro', {token}).then((res)=> handler(res) );
        } catch(e) {
            console.log(e)
        }
    }
    else{
        store.dispatch(togglePending(false))
    }
}
export default jwtHandler