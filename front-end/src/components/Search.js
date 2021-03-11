import React, { Component } from 'react'
import Card from "./Card"

export default class Search extends Component {
  render() {
    const ItemCard = this.props.searchResultArray.map((Item, key) => {
      return (
        <Card
          key={key}
          item={Item}
          removeFav={this.props.removeFav}
          getFav={this.props.getFav}
        />
      );
    });
    return <div className="topHeader boot">{ItemCard}</div>;
  }
}

