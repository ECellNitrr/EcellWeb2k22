import { UPDATE_USER } from '../actions/authActions'

const initialState = {
    loggedin: false,
    first_name: '',
    last_name: '',
    startup_id: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case UPDATE_USER: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: 
            return state
    }
}