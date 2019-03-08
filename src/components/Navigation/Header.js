import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Collapse,Row,Col,Modal} from 'react-bootstrap'
import AccountModule from './AccountModule'



class Header extends Component {

    state={modalOpen:false}

    render(){
        const {generalData,location} = this.props
        const path = location.pathname.split('/')[1]
        const {modalOpen} = this.state
        return (
            <Row className="fullWidth">
                <Collapse in={path!==''}>
                    <Col xs={12} className="header bottomBorder">
                        <br/>
                        <div onClick={()=>this.setState({modalOpen:true})} className="padding-sides-20 flexDisplay">
                            <h3>Account:</h3>
                            <div style={{width:10}}></div>
                            <h3><strong className="linkStyles">{generalData&&generalData.general.accountName}</strong></h3>
                            <i className="fas fa-caret-down"></i>
                        </div>
                        <Collapse in={path!==''}>
                            <div className="padding-sides-40">
                                <em>{path.charAt(0).toUpperCase() + path.slice(1)} information...</em>
                            </div>
                        </Collapse>
                    </Col>            
                </Collapse>
                <Modal onHide={()=>this.setState({modalOpen:false})} size="lg" show={modalOpen}>
                    <Modal.Header>
                        <h4>Account: {generalData&&generalData.general.accountName}</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <AccountModule onHider={()=>this.setState({modalOpen:false})}/>
                    </Modal.Body>
                </Modal>
            </Row>
        )
    }
}

function mapStateToProps(initialState){
    return {
        generalData: initialState.generalReducers.generalData
    }
}

export default withRouter(connect(mapStateToProps,{})(Header))