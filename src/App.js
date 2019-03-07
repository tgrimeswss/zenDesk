import React, { Component } from 'react'
import NavigationView from './components/Navigation/NavigationVew'
import Header from './components/Navigation/Header'
import GeneralView from './components/General/GeneralView'
import {connect} from 'react-redux'
import AccountingView from './components/Accounting/AccountingView'
import {Route,Switch,withRouter} from 'react-router-dom'
import {getGeneralData} from './actions'
import {Container} from 'react-bootstrap'
import ErrorComponent from './components/Modules/ErrorComponent'
import TransportationView from './components/Transportation/TransportationView'


class App extends Component {

  componentWillMount(){
    //API call IF data has not been cached in redux already
    const {getGeneralData,generalData} = this.props
    if(generalData===undefined||generalData===false)getGeneralData('customerName')
  }

  render() {
    return (
      <Container>
        <NavigationView/>
        <Header/>
        <Switch>
          <Route exact path="/" render={()=><ErrorComponent title="No customer selected" message="Please refresh the ZenDesk application."/>} />
          <Route path="/general" render={()=><GeneralView/>} />
          <Route path="/transportation" render={()=><TransportationView/>} />
          <Route path="/accounting" render={()=><AccountingView/>} />
        </Switch>
      </Container>
    );
  }
}

function mapStateToProps(initialState){
  return {
    generalData: initialState.generalReducers.generalData
  }
}

export default withRouter(connect(mapStateToProps,{getGeneralData})(App))
