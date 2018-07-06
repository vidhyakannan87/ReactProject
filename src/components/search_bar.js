import React,{ Component } from 'react';


class SearchBar extends Component{
constructor(props)
{
  super(props);
  this.state = {term:''};
}
render()
{
  return(
      <div className="search-bar">
      <input onChange={event => this.onInputChangeHandler(event.target.value)}/>
      </div>
);
}

onInputChangeHandler(term)
{
  this.setState({term});
  this.props.onSearchChange(this.state.term);
}

}

export default SearchBar;
