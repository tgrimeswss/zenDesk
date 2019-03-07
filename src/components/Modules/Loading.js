import React,{Component} from 'react'
import { Dots } from '@zendeskgarden/react-loaders'


class Loading extends Component {
    render(){
        return  (
            <div className="padding-40 centeredText">
                <Dots size={60} />
            </div>
        )
    }
}

export default Loading