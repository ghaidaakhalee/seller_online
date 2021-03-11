import React, { Component } from 'react'

import SellerCard from './SellerCard'


export default class SellerDesh extends Component {
  render() {
    const ItemCard = this.props.sellerItem.map((Item, key) => {
      return (
        <SellerCard
          key={key}
          item={Item}
        />
      );
    });
    return (
      <div>
        {ItemCard}
      </div>
    )
  }
}
