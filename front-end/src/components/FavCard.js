import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";

export default class FavCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Item: [],
      sellerName: "",
      sellerContact: "",
      number: "",
    }
  }
  componentDidMount() {
    this.getSeller()
  }
  getSeller = () => {
    const sellerId = this.props.item.sellerId
    axios
      .get(`/api/seller/oneSellerId?id=${sellerId}`)
      .then((response) => {
        this.setState({
          sellerName: response.data.name,
          sellerContact: response.data.cotactInfo,
          number: response.data.phoneNumber

        })

        console.log(response.data)
      })
      .catch((err) => {
        console.log('ERR: ', err);
      });
  }

  render() {
    return (

      <div className="boot">
        <div class="card">
          <img src={this.props.item.image} width='300px' height='300px'></img>
          <div class="card-body">

            <div className='material-icons favorite' onClick={this.props.removeFav}>
              <i class="material-icons">favorite</i></div>
            <h3 class="card-text">{this.props.item.itemTitle}</h3>
            <p class="card-text priceCon">{this.props.item.price} .SR </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group botCon">
                <Link to={`/ItemInfo/:${this.props.item._id}`}>
                  <button type="button" class="form-group buttonCard" onClick="window.open('/ItemInfo')" >More</button>
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

