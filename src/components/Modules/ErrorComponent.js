import React,{Component} from 'react'
import {Collapse} from 'react-bootstrap'



class ErrorComponent extends Component {

    state={open:true}

    switchType=()=>{
        switch(this.props.type){
            case 'success': return '#e0ffe3'
            case 'warn': return '#ffcdba'
            default: return '#e0ffe3'
        }
    }

    render(){
        const {title,message} = this.props
        const {open} = this.state
        return (
            <div className="padding-10">
                <Collapse in={open}>
                    <div style={{backgroundColor:`${this.switchType()}`}} className="borderSlightRound padding-10">
                        <div className="fas fa-times padding-10 grow linkStyles" onClick={()=>this.setState({open:!open})}></div>
                        <div className="flexDisplay">
                            <div style={{width:20}}></div>
                            <div>
                                <h4>{title}</h4>
                                <p>{message}</p>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        )
    }
}

export default ErrorComponent