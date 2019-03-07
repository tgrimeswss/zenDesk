import {
    GET_GENERAL_DATA
} from '../actions/types'

let initialState={
    generalData:false,
}

function storeData(state=initialState,action){
    switch(action.type){
        case GET_GENERAL_DATA:
            return {
                ...state,
                generalData: action.data
            }
        default: return true
    }
}

export default storeData