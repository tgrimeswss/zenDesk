import React,{Component} from 'react'
import TableComponent from '../Modules/TableComponent'
import {connect} from 'react-redux'
import DropdownComponent from '../Modules/DropdownComponent'



class AccountingView extends Component {
    render(){
        const internalAccountArr = ['name','title','phone','email','contactNotes','remarksSections']
        const {generalData} = this.props
        if(generalData){
            return (
                <div>
                    <div className="padding-20"><DropdownComponent header1="Internal Accouting Contact: " header2={generalData.accounting.internalAccountingContact.name} content={<TableComponent data={generalData.accounting.internalAccountingContact} subType="accounting" arrayType={internalAccountArr}/>}/></div>
                    {generalData.accounting.ownershipContacts.map((contact,i)=>(
                        <div key={i} className="padding-20"><DropdownComponent header1="Ownership contact:" header2={contact.name} content={<TableComponent data={contact} subType="accounting" arrayType={internalAccountArr}/>}/></div>
                    ))}
                </div>
            )
        } else {
            return null
        }
    }
}

function mapStateToProps(initialState){
    return {
        generalData: initialState.generalReducers.generalData
    }
}

export default connect(mapStateToProps)(AccountingView)