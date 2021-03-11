import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fav from './Fav'
import axios from "axios";
import ItemInfo from './ItemInfo'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Item: [],
      sellerName: "",
      sellerContact: "",
      number:""
    }
  }




  handleNew = () => {
    this.props.handleItemInfo(this.props.item._id)
    window.open('/ItemInfo')
  }


  getItemInfor = () => {
    axios
      .get(`/api/seller/OneItem?id=${this.props.item._id}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ Item: response.data });

      })
  }

  componentWillUpdate() {
    // localStorage Favorite item array so we don't need to stor in db
    localStorage.setItem("sellerName", JSON.stringify(this.state.sellerName));
    localStorage.setItem("sellerContact", JSON.stringify(this.state.sellerContact));
    
  }
  render() {

    return (
      <div className="boot">
        <div class="card">
          <img src={this.props.item.image} width='300px' height='300px'></img>
          <div class="card-body">
            <Fav
              getFav={this.props.getFav}
              removeFav={this.props.removeFav}
              item={this.props.item} />
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
