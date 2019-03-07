import React,{Component} from 'react'
import {Row,Col,DropdownButton,ButtonGroup,Dropdown,Modal,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import TableComponent from '../Modules/TableComponent'
import Loading from '../Modules/Loading'
import InvoiceItem from './InvoiceItem'



class GeneralView extends Component {

    state={sideBarOpen:false,modalOpen:false,invoice:false}

    componentDidMount(){
        // window.onresize = (e) => {
        //     let elem = ReactDOM.findDOMNode(this.refs.invoices)
        //     let height = window.innerHeight - 140
        //     elem.style.height = height + 'px'
        //   }

    }

    printInvoice=()=>{
        const invoiceBox = document.querySelector('#printInvoice')
        let w = window.open()
        w.document.write(invoiceBox.innerHTML)
        w.print()
        w.close()
    }


    render(){
        const {generalData} = this.props
        const {modalOpen,invoice} = this.state
        if(generalData){
            let generalSection = ['accountCode','accountName','salesRep','category','subcategory']
            let shippingSection = ['billTo','shipTo','deliveryNotes','orderNotes', 'lastOrder']
            return (
                <Row>
                    <Col sm={12} md={2} className="d-block d-md-none">
                        <div className="padding-10">
                            <DropdownButton className="fullWidth" as={ButtonGroup} title="Invoices" id="bg-vertical-dropdown-1">
                                {generalData.invoices.map((invoice,i)=>(
                                    <Dropdown.Item onClick={()=>this.setState({modalOpen:true,invoice})} key={i} eventKey={i}><div className="padding-10 linkStyle fas fa-info-circle grow linkStyles"></div>#{invoice.invoiceNum}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </div>
                    </Col>
                    <Col sm={12} md={5}><TableComponent data={generalData&&generalData.general} header="General Information" subType="general" arrayType={generalSection}/></Col>
                    <Col className="d-md-none d-lg-none" style={{height:40}}></Col>
                    <Col sm={12} md={5}><TableComponent data={generalData&&generalData.general} subType="general" header="Shipping-Billing Information" arrayType={shippingSection}/></Col>
                    <Col sm={12} md={2} className="d-none d-md-block noPadding">
                        <div className="invoiceContainer leftBorder" ref="invoices">
                            <h4 className="centeredText padding-10">Invoices</h4>
                            {generalData.invoices.map((invoice,i)=>(
                                <InvoiceItem onClicker={()=>this.setState({modalOpen:true,invoice})} key={i} invoice={invoice} i={i}/>
                            ))}
                        </div>
                    </Col>
                    <Modal onHide={()=>this.setState({modalOpen:false})} size="lg" show={modalOpen}>
                        <Modal.Header>
                            <Modal.Title>Invoice #{invoice.invoiceNum}</Modal.Title>
                            {true&&<Button onClick={this.printInvoice} variant="primary">Print <span className="fas fa-print"></span></Button>}
                        </Modal.Header>
                        <Modal.Body>
                            <div id="printInvoice">
                                Invoice data will be displayed here
                            </div>
                        </Modal.Body>
                    </Modal>
                </Row>
            )            
        } else return <Loading/>
    }
}

function mapStateToProps(initialState){
    return {
        generalData: initialState.generalReducers.generalData
    }
}

export default connect(mapStateToProps)(GeneralView)