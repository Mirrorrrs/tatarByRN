import {SET_FIRST_VISIT, SET_LOGIN, SET_TOKEN, SET_USER_REGION} from "../consts";


const initialState = {
    login:"",
    token:null,
    firstVisit:true,
    userRegion:{}
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
        case SET_USER_REGION:
            return {
                ...state,
                userRegion: action.payload
            }

        default: return state
    }
}