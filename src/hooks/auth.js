import { useContext } from 'react';
import axios from 'axios';
import IdentityContext from '../contexts/Identity';


const useAuth = () => {
  const identity = useContext(IdentityContext);
  const login = async(email, password) => {
    try {
      const result = await axios.post('http://localhost:3001/users/login', {email, password});
      console.log(result);
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('isAuthenticated', true);
      identity.setCurrent({
        email: result.data.email,
        username: result.data.username,
        token: result.data.token,
      });
    } catch (e) {
      console.log('something went wrong', e);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    identity.setCurrent({
      email: undefined,
      username: undefined,
      token: undefined,
    });
  }

  const register = async (email, username, password) => {
    try {
      const result = await axios.post('http://localhost:3001/users/register', {email, username, password});
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('isAuthenticated', true);
      identity.setCurrent({
        email: result.data.email,
        username: result.data.username,
        token: result.data.username,
      });
    } catch (e) {
      console.log('something went wrong');
    }
  }

  return {register, logout, login, identity: identity.current}
};

export default useAuth;