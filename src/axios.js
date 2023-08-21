import axios from 'axios';
import { store } from './index';

// export const baseURL = 'http://159.65.158.103:3000/'
// export let baseURL = 'https://ecell.nitrr.ac.in';
// export let baseURL = 'https://206.189.143.11/';
// export let baseURL ="http://localhost:8000";
// export let baseURL ="http://8a22a572.ngrok.io";http://43.205.53.122/
//export let baseURL ="https://ecellbackend.tech/";
export let baseURL ="https://ecell.nitrr.ac.in/api/";

// if (process.env.NODE_ENV === 'production') {
  // baseURL = 'https://ecell.nitrr.ac.in';
// }

export default () => {
  let token = undefined;
  let accessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ';
  const user = store.getState().auth;

  if (user) {
    // console.log({user})
    token = user.loggedin ? user.token : undefined;
  }
  return axios.create({
    baseURL,
    headers: {
      Authorization: token,
      Access: accessToken,
    },
  });
};
