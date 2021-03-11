import React, { Component } from "react";
import Card from "./Card";

export default class Home extends Component {
  render() {
    const ItemCard = this.props.ItemState.map((Item, key) => {
      return (
        <Card
          key={key}
          item={Item}
          ItemId={Item._id}
          removeFav={this.props.removeFav}
          getFav={this.props.getFav}
          AddItemToArray={this.props.AddItemToArray}
        />

      );
    });
    return (

      <div><h1 className='wel'>Welcome to the world of selling</h1>
        <div className="topHeader boot">{ItemCard}</div>
      </div>);
  }

}



