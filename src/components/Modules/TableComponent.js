import React,{Component} from 'react'
import {Table,OverlayTrigger,Tooltip,Collapse,Modal} from 'react-bootstrap'
import {data2Render} from '../../helpers'
import {connect} from 'react-redux'


class TableComponent extends Component {

    state={open:false,content:false}

    
    getItem=(data,item)=>{
        if(data&&data[item]){
            const elem = data[item]
            if(typeof(elem)==='object'){
                return (
                    <td>
                        {elem.map((subItem,i)=>{
                            return <span key={i}>{subItem}{i!==elem.length-1&&','} </span>
                        })}
                    </td>
                )
            } else return <td>{elem}</td>
        } else return <td></td>
    }

    render(){
        const {arrayType,header,data} = this.props
        const {open,content} = this.state
        return (
            <div>
                <Collapse in={data!==undefined}>
                    <div className="padding-10">
                        <h4 className="centeredText padding-10">{header}</h4>
                        {data!==undefined&&(
                            <Table bordered>
                                <tbody>
                                    {arrayType.map((item,i)=>{
                                        return (
                                            <tr key={i}>
                                                <td className="headerBackground">
                                                    <strong>{data2Render[item]}</strong>
                                                    <OverlayTrigger key={i} placement="top" overlay={<Tooltip>Edit {data2Render[item]}</Tooltip>}>
                                                        <i onClick={()=>this.setState({open:true,content:item})} className="fas fa-edit font-10 padding-10 blueFont pointer grow"></i>
                                                    </OverlayTrigger>
                                                </td>
                                                {this.getItem(data,item)}
                                            </tr>
                                        )}   
                                    )}
                                </tbody>
                            </Table>
                        )}
                    </div>             
                </Collapse>

                <Modal onHide={()=>this.setState({open:false,content:false})} size="lg" show={open&&content!==false}>
                    <Modal.Header>
                        <Modal.Title>{content!==false&&data2Render[content]}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Editing content to be displayed here
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(initialState){
    return {
        generalData: initialState.generalReducers.generalData
    }
}

export default connect(mapStateToProps)(TableComponent)