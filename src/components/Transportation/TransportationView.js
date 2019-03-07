import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import TableComponent from '../Modules/TableComponent'


class TransportationView extends Component {
    render(){
        const {generalData} = this.props
        const transportationSection1 = ['routeNumbers','noDeliveryDays','stopNumber','deliveryNotes']
        const transportationSection2 = ['avgDeliveryTime','deliveryWindow','driversName']
        return (
            <Row>
                <Col sm={12} md={6}><TableComponent data={generalData&&generalData.transportation} subType="transportation" header="Route-Delivery Information" arrayType={transportationSection1}/></Col>
                <Col sm={12} md={6}><TableComponent data={generalData&&generalData.transportation} subType="transportation" header="Schedule Information" arrayType={transportationSection2}/></Col>
            </Row>
        )
    }
}

function mapStateToProps(initialState){
    return {
        generalData: initialState.generalReducers.generalData
    }
}


export default connect(mapStateToProps)(TransportationView)