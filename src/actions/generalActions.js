import axios from 'axios'
import {
    GET_GENERAL_DATA,
} from './types'


export function getGeneralData(customer){
    return async(dispatch)=>{
        //Change to real data when making API call vvvv
        const res = await axios.get(`/api/data/${customer}`)
        dispatch({type:GET_GENERAL_DATA,data:res.data.data})
    }
}