import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
// import Artists from '../components/Artists.js';

class PlaylistContainer extends React.Component {
	constructor () {
		super()
		this.state = {
			inputValue: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);

	}

	handleChange(evt){
    	const value = evt.target.value;
    	this.setState({
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
		  			inputValue={this.state.inputValue}
		  			submitForm={this.submitForm} 
		  			handleChange={this.handleChange} 
		  		/>
	  		</div>
	  	)
  	}

}

export default PlaylistContainer;