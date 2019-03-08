import React,{Component} from 'react'
import {Collapse} from 'react-bootstrap'



class DropdownComponent extends Component {

    state={open:false}
    
    render(){
        const {content,header1,header2} = this.props
        const {open} = this.state
        return (
            <div className="borderSlightRound lastItemRight fullWidth">
            <div onClick={()=>this.setState({open:!open})} className="flexDisplay padding-10 hoverOver pointer">
                <div><h4>{header1}</h4></div>
                <div style={{width:20}}></div>
                <div><h4><strong>{header2}</strong></h4></div>
                <div className={`fas fa-caret-${open?'up':'down'} font-20 padding-sides-20 pointer grow linkStyles`}></div>
            </div>
            <Collapse in={open}>
                <div>
                    {content}
                </div>
            </Collapse>
            </div>
        )
    }
}

export default DropdownComponent