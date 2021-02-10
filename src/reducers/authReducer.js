import { UPDATE_USER, LOGOUT, GET_USER_DETAILS } from '../actions/authActions'

const initialState = {
    loggedin: false,
    first_name: '',
    last_name: '',
    startup_id: null,
    token: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USER: {
            return {
                ...state,
                loggedin: true,
                token: action.payload.token
            }
        }
        case LOGOUT: {
            return {
                ...initialState,
            }
        }
        case GET_USER_DETAILS: {
            return {
                ...state,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                startup_id: action.payload.startup_id,
                ...action.payload
            }
        }
        default: 
            return state
    }
}