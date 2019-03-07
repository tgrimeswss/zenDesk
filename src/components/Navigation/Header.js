import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Collapse,Row,Col} from 'react-bootstrap'



class Header extends Component {
    render(){
        const {generalData,location} = this.props
        const path = location.pathname.split('/')[1]
        return (
            <Row className="fullWidth">
                <Collapse in={path!==''}>
                    <Col xs={12} className="headerBackground bottomBorder">
                        <br/>
                        <div className="padding-sides-20 flexDisplay">
                            <h3>Organization:</h3>
                            <div style={{width:10}}></div>
                            <h3><strong>{generalData&&generalData.general.accountName}</strong></h3>
                        </div>
                        <Collapse in={path!==''}>
                            <div className="padding-sides-40">
                                <em>{path.charAt(0).toUpperCase() + path.slice(1)} information...</em>
                            </div>
                        </Collapse>
                    </Col>            
                </Collapse>
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