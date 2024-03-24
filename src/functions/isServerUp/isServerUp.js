import axios from 'axios';
import { toggleServerUp } from 'redux/reducers';
import store from "redux/store";

const isServerUp = () => {
    const checkServer = async () =>{
        await axios.get('https://socialback.bieda.it/isserverup').then((res)=>{
            if(res.data === 'up'){store.dispatch(toggleServerUp(true))}
        }).catch((err)=>{
            console.log('server not up', err.code)
        })
    }
    checkServer()
    return null
}

export default isServerUp