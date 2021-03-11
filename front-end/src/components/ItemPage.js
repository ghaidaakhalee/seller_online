import React, { Component } from 'react'
import axios from "axios";
import Fav from './Fav'

export default class ItemPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      itemInfo: [],
      sellerName: "",
      sellerContact: "", 
      number: ""
    }
  }

  componentDidMount() {
    this.getItemInfor()

  }

  getItemInfor = () => {
    axios
      .get(`/api/seller/OneItem?id=${this.props.itemId}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ itemInfo: response.data });
        this.getSeller()

      })
  }
  
  
  getSeller = () => {
    const sellerId = this.state.itemInfo.sellerId
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
  state
  render() {
    return (
      <div>
        <div className="boot">
          <div class="myCard cardInfo boot">
            <img src={this.state.itemInfo.image} width='600px' height='500px'></img>
            <div class="card-body">
              <Fav getFav={this.props.getFav}/>
              <h3 class="card-text">{this.state.itemInfo.itemTitle}</h3>
              <p class="card-text">{this.state.itemInfo.description}</p>
              <p class="card-text">Item state: {this.state.itemInfo.state}</p>
              <p class="card-text priceCon">{this.state.itemInfo.price} .SR</p>
              <p class="card-text">Selling By: {this.state.sellerName}</p>
             
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group botCon">
                  <p className='pItem'>To communicate:</p>
                  <a href={"mailto:" + this.state.sellerContact + "?subject=your title&body=TThe message"}>
                  {/* <button type="button" class=" form-group buttonCard ">Email</button> */}
                  <img src="https://img.icons8.com/nolan/64/email.png"/>
                </a>
                <a href={"https://wa.me/" + this.state.number + "/?text=urlencodedtext"} target="_blank">
                  {/* <button type="button" class="form-group buttonCard">
                    What's</button> */}
                    <img src="https://img.icons8.com/cute-clipart/64/000000/whatsapp.png"/>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// mongodb+srv://GhaidaaKhalil:UItJ07EVuLiyiyxi@cluster0.rrwqc.mongodb.net/selling?retryWrites=true&w=majority


