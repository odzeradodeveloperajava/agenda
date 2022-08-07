import axios from 'axios';
import store from '../../redux/store';
import { toggleUserIsLoggedIn, setLoggedUserEmail } from '../../redux/reducers';

const setLoggedData = (email) =>{
  store.dispatch(toggleUserIsLoggedIn(true));
  store.dispatch(setLoggedUserEmail(email))
}

const isUserLoggenIn = async () => {
    const isLoggenIn = await axios.get('http://localhost:9000/persistence').then((res)=> {
        console.log(res.data)
        return res.data.email === false ? false : (
          setLoggedData(res.data.email)
          )
        }
        );
  return (
    isLoggenIn
  )
}

export default isUserLoggenIn