import {SET_FIRST_VISIT, SET_LOGIN, SET_TOKEN} from "../consts";


const initialState = {
    login:"",
    token:null,
    firstVisit:true
}

export const UserReducer = (state = initialState, action)=>{
    switch (action.type){
        case SET_LOGIN:
            return {
                ...state,
                login: action.payload
            }

        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case SET_FIRST_VISIT:
            return {
                ...state,
                firstVisit: action.payload
            }

        default: return state
    }
}