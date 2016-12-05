import React from 'react';
import Artists from '../components/Artists.js';
import FilterInput from '../components/FilterInput.js';

class FilterableArtistsContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: '',
      filteredArtist: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt){
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }

  render(){
    const filteredArtists = this.props.artists.filter(artist => {
          if(this.state.inputValue === '') return true;
          return artist.name.includes(this.state.inputValue);
        });

    return (
      <div>
      <FilterInput handleChange={this.handleChange}/>
      <Artists artists={filteredArtists}/>
      </div>
    )
  }
}

export default FilterableArtistsContainer;