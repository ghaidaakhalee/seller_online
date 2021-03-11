import React, { Component } from 'react'
import axios from "axios";
import {Link} from 'react-router-dom';
// import  { Redirect } from 'react-router-dom'

export default class EditItem2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
        itemTitle: '',
        image: '',
        description: '',
        price: '',
        // state: '',
        itemInfo: [],
        updateMess:''
        }
      }

      titleChangeHandler=(e)=>{
        this.setState ({itemTitle: e.target.value},()=>{console.log(this.state.itemTitle)})
        
      }
      imgChangeHandler=(e)=>{
        this.setState ({image: e.target.value},()=>{console.log(this.state.image)})
        
      }
      descChangeHandler=(e)=>{
        this.setState ({description: e.target.value},()=>{console.log(this.state.description)})
        
      }
      priceChangeHandler=(e)=>{
        this.setState ({price: e.target.value},()=>{console.log(this.state.price)})
        
      }
    //   stateChangeHandler=(e)=>{
    //     this.setState ({state: e.target.value},()=>{console.log(this.state.state)})
        
    //   }
      componentDidMount() {
        this.getItemInfor()
    
      }
    
  getItemInfor = () => {
    axios
      .get(`/api/seller/OneItem?id=${this.props.itemId}`)
      .then((response) => {
        console.log("RESPONSE: ", response);
        console.log("DATA: ", response.data);
        this.setState({ itemInfo: response.data,  
           itemTitle:response.data.itemTitle, 
           image:response.data.image, 
           description:response.data.description, 
           price: response.data.price, 
           
           
        }, 
           );

      })
  }
    editItem = (e) => {
      e.preventDefault()
        axios
          .put(`/api/seller/updateItem?id=${this.props.itemId}`,{
            itemTitle:this.state.itemTitle,
            image: this.state.image,
            description: this.state.description,
            price: this.state.price
            // stateItem: this.state.stateItem
          })


          .then((response) => {
            console.log("RESPONSE: ", response);
            console.log("DATA: ", response.data);
            this.setState({updateMess:"Item Updated"})

          })
          .catch((err) => {
            console.log("ERR: ", err);
          });
        //   <Redirect to='/SellerInfo'  />
      }
    render() {
        return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 b">
            <div className="myLeftCtn add">
            <header>Update an Item</header>
            <p className='ItemAdd'>{this.state.updateMess}</p>
          <form 
            className="myForm text-center">
                <div className="form-group">
            <label>
                Item Title 
                <input type="text" name="ItemTitle"
                className="myInput ad"
                onChange={this.titleChangeHandler}
                placeholder={this.state.itemInfo.itemTitle}
                />
            </label>
                </div>
        <br></br>
            <div className="form-group">
            <label>
                Image Link 
                <input type="text" name="img"
                className="myInput ad" 
                onChange={this.imgChangeHandler}
                placeholder={this.state.itemInfo.image}/>
            </label>
            </div>
            <br></br>
            <label>
                Description 
                <input type="text" name="description" 
                className="myInput ad" 
                onChange={this.descChangeHandler}
                placeholder={this.state.itemInfo.description}/>
            </label>
            <br></br><br></br>
            <label>
                Item Price 
                <input type="text" name="ItemPrice" 
                className="myInput ad"
                onChange={this.priceChangeHandler}
                placeholder={this.state.itemInfo.price} />
            </label>
            <br></br><br></br>
            {/* <label>
                Item State 
                <input type="text" name="ItemState" 
                className="myInput ad"
                onChange={this.stateChangeHandler}
                placeholder={this.state.itemInfo.state} />
            </label> */}
          </form>
                <br></br>
                <Link to="/SellerInfo">
                <button className="form-group btn addbtn" 
                onClick={this.editItem}>update</button>
                </Link>
              </div>
            </div>
          </div>
        </div> 
        
        )
    }
}
