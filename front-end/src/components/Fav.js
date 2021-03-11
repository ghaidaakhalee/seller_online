import React, { Component } from 'react'

export default class Fav extends Component {
  constructor(props) {
    super();
    this.state = {
      isFav: false,
    };
  }
  handleClick = (e) => {
    console.log('Handling Fave click!')
    this.setState({ isFav: !this.state.isFav })
    this.props.getFav(this.props.item, this.state.isFav)
  }
  render() {
    const isFave = (this.state.isFave) ? 'favorite' : 'favorite'
    
    return (
      <div className={`material-icons  ${isFave} heart`} onClick={this.handleClick} >
          <p className="material-icons heart">{isFave}</p>
      </div>)

  }
}
