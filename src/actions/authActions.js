import faxios from '../axios';

//Type constants
export const UPDATE_USER = 'UPDATE_USER'
export const LOGOUT = 'LOGOUT'
export const GET_USER_DETAILS = 'GET_USER_DETAILS'

export const updateUser = payload => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload
    })
    dispatch(getUserDetails());
} 

const getUserDetails = () => async (dispatch) => {
    try {
        const { data } = await faxios().get('/users/get_user_details/');
        dispatch({
            type: GET_USER_DETAILS,
            payload: data,
        })
    } catch (error) {
        console.log(error);
    }
}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}