import React,{Component} from 'react'
import '@zendeskgarden/react-modals/dist/styles.css'


class InvoiceItem extends Component {

    render(){
        const {invoice,i,onClicker} = this.props
        return (
            <div key={i} className="flexDisplay bottomBorder">
                <div onClick={onClicker} className="padding-10 linkStyle fas fa-info-circle grow linkStyles"></div>
                <div className="padding-10 linkStyles">#{invoice.invoiceNum} - {invoice.date}</div> 
            </div>
        )
    }
}

export default InvoiceItem