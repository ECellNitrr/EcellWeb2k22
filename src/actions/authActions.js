import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR } from './types'
import faxios from '../axios';
//Legacy Code
export const updateUser = payload => dispatch => {
    dispatch({
        type: 'update_user',
        payload
    })
} 
//Reducers


//Actions
export const login = (email, password) => async dispatch => {
    faxios.post();
}