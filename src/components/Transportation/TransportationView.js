import React,{Component} from 'react'
import {Row,Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import TableComponent from '../Modules/TableComponent'

const RouteNumbers=(props)=>{
    let week = ['Mon','Tues','Wed','Thurs','Fri']
    return (
        <td>
            {week.map((day,i)=>(
                <div key={i} className="flexDisplay bottomBorder lastItemRight">
                    <div>{day}</div>
                    <div className="linkStyles">#123</div>
                </div>
            ))}
        </td>
    )
}



class TransportationView extends Component {
    customComponents = [
        {name:'routeNumbers',component:RouteNumbers(this.props)},
        {name:'stopNumbers',component:RouteNumbers(this.props)}
    ]
    render(){
        const {generalData} = this.props
        const transportationSection1 = ['routeNumbers','noDeliveryDays','stopNumbers','deliveryNotes']
        const transportationSection2 = ['avgDeliveryTime','deliveryWindow','driversName']
        return (
            <Row>
                <Col sm={12} md={6}><TableComponent customComponents={this.customComponents} data={generalData&&generalData.transportation} subType="transportation" header="Route-Delivery Information" arrayType={transportationSection1}/></Col>
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