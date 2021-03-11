import React, { Component } from 'react'

import ItemPage from './ItemPage';


export default class ItemInfo extends Component {
  render() {
    const currentRoute = window.location.pathname
    const id = currentRoute.split('/ItemInfo/:');
    return (
      <div className="topHeader">
        <ItemPage itemId={id[1]} getFav={this.props.getFav} />
      </div>
    )
  }
}
