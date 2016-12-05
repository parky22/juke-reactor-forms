import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
// import Artists from '../components/Artists.js';

class PlaylistContainer extends React.Component {
	constructor () {
		super()
		this.state = {
			inputValue: '',
			validInput: true
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);

	}

	handleChange(evt){
    	let nameIsValid = true;

    	const value = evt.target.value;
    	const nameLength = this.state.inputValue.length;
    	if ( nameLength <= 16 && nameLength > 0 ) nameIsValid=false;
    	else nameIsValid=true;
    	this.setState({
    		validInput: nameIsValid,
    		inputValue: value
    	});
  	}

  	submitForm(evt) {
  		console.log(this.state.inputValue);
  		evt.preventDefault();
  		this.setState({inputValue: ''});
  	}

  	render() {
  		return(
  			<div>
		  		<NewPlaylist
		  			validInput={this.state.validInput}
		  			inputValue={this.state.inputValue}
		  			submitForm={this.submitForm} 
		  			handleChange={this.handleChange} 
		  		/>
	  		</div>
	  	)
  	}

}

export default PlaylistContainer;