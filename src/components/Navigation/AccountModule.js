import React,{Component} from 'react'
import Autosuggest from 'react-autosuggest'
import {Collapse} from 'react-bootstrap'
 

const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },

];

 

const getSuggestionValue = suggestion => suggestion.name;
 


 
class AccountModule extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      selectedAccount:false,
    };
  }

  componentDidMount(){
      const input = document.querySelector('.react-autosuggest__input')
      input.addEventListener('click',()=>{
          input.placeholder=''
      })
      input.addEventListener('blur',()=>{
        input.placeholder='Search for an account name here...'
      })
      input.addEventListener('keyup',(e)=>{
          if(e.target.value.length===0)input.placeholder = 'Search for an account name here...'
      })
  }
 
  onChange = (event, { newValue }) => {
    this.setState({value: newValue});
  }

  renderSuggestion = suggestion => (
    <div onClick={()=>this.setState({selectedAccount:suggestion})} className="suggestion padding-10 bottomBorder linkStyles">
      {suggestion.name}
    </div>
  )

  setAccount=()=>{
      const {onHider} = this.props
      //API CALL HERE
      onHider()
  }
 
  getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : languages.filter(lang =>
      lang.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };

  render() {
    const { value, suggestions, selectedAccount } = this.state;
    const inputProps = {placeholder: 'Search for an account name here...',value,onChange: this.onChange}
    return (
        <div>
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={({value})=>this.setState({suggestions: this.getSuggestions(value)})}
                onSuggestionsClearRequested={()=>this.setState({suggestions: []})}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}/>
            <br/>
            <Collapse in={selectedAccount!==false}>
                <div className="centeredText padding-10 borderSlightRound pointer hoverOver" onClick={this.setAccount}>
                    Show information on {selectedAccount.name}
                </div>
            </Collapse>
        </div>
    );
  }
}


export default AccountModule