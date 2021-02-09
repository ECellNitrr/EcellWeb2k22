export const UPDATE_USER = 'UPDATE_USER'
export const LOGOUT = 'LOGOUT'
//Legacy Code
export const updateUser = payload => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload
    })
} 

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}