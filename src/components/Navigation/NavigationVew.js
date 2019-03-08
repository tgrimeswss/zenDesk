import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Row} from 'react-bootstrap'


class NavigationView extends Component {

    state={selected:''}

    tabs=['General','Transportation','Accounting']

    render(){
        const {history,location} = this.props
        const path = location.pathname.split('/')[1]
        return (
            <Row>
                <div className="fullWidth" style={{zIndex:1000}}>
                    <div className="flexDisplay navContainer whiteFont">
                        {this.tabs.map((tab,i)=>(
                            <div key={i} className={`fullWidth centeredText padding-10 ${path===tab.toLowerCase()&&'navItemSelected'}`}>
                                <div onClick={()=>history.push(`/${tab.toLowerCase()}`)} className={`grow pointer navContainer`}>{tab}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Row>
        )
    }
}


export default withRouter(NavigationView)