import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';
// import Artists from '../components/Artists.js';

class PlaylistContainer extends React.Component {
	constructor () {
		super()
		this.state = {
			inputValue: '',
			invalidInput: true,
			wasEdited: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);

	}

	handleChange(evt){
    	let temp = true;

    	const value = evt.target.value;
    	const nameLength = value.length;
    	if ( nameLength <= 16 && nameLength > 0 ) temp=false;

    	this.setState({
    		invalidInput: temp,
    		inputValue: value,
				wasEdited: true
    	});
  	}

  	submitForm(evt) {
  		const name = this.state.inputValue;
  		evt.preventDefault();
  		this.setState({inputValue: ''});
			this.props.createPlaylist(name);
  	}

  	render() {

  		return(
  			<div>
		  		<NewPlaylist
		  			invalidInput={this.state.invalidInput}
		  			inputValue={this.state.inputValue}
		  			submitForm={this.submitForm}
		  			handleChange={this.handleChange}
		  		/>
					{(this.state.invalidInput && this.state.wasEdited) ? <div className="alert alert-warning">Please enter a name</div> : null}
	  		</div>
	  	)
  	}

}

export default PlaylistContainer;