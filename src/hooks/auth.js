import { useContext } from 'react';
import axios from 'axios';
import IdentityContext from '../contexts/Identity';


const useAuth = () => {
  const identity = useContext(IdentityContext);
  const login = async(email, password) => {
    try {
      const result = await axios.post('http://localhost:3001/users/login', {email, password});

      const profile = {
        email: result.data.email,
        username: result.data.username,
        token: result.data.token,
      };

      localStorage.setItem('token', result.data.token);
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('profile', JSON.stringify(profile));
      identity.setCurrent(profile);
    } catch (e) {
      console.log('something went wrong', e);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('profile');
    identity.setCurrent({
      email: undefined,
      username: undefined,
      token: undefined,
    });
  }

  const register = async (email, username, password) => {
    try {
      const result = await axios.post('http://localhost:3001/users/register', {email, username, password});
      const profile = {
        email: result.data.email,
        username: result.data.username,
        token: result.data.username,
      }
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('profile', JSON.stringify(profile));

      identity.setCurrent(profile);
    } catch (e) {
      console.log('something went wrong');
    }
  }

  return {register, logout, login, identity: identity.current}
};

export default useAuth;