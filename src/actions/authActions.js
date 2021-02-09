export const UPDATE_USER = 'UPDATE_USER'
//Legacy Code
export const updateUser = payload => dispatch => {
    dispatch({
        type: UPDATE_USER,
        payload
    })
} 
