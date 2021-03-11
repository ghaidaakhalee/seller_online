import React, { Component } from 'react'
import axios from "axios";
import "../newSeller.css";
export default class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      itemTitle: '',
      image: '',
      description: '',
      price: '',
      state: '',
      youAdded: ''
    }
  }
  ChangHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  SubmitHandler = (e) => {
    const { itemTitle, image, description, price, state } = this.state
    e.preventDefault()
    console.log(this.state)
    axios.post(`/api/seller/AddItem?userName=${this.state.userName}`, { itemTitle, image, description, price, state })
      .then(respons => {
        console.log(respons.data)
        this.setState({ itemTitle: '', image: '', description: '', price: '', state: '', youAdded: 'Item Added' })
      })
      .catch(error => {
        console.log(error)
      })
  }


  render() {
    const { userName, itemTitle, image, description, price, state } = this.state
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-6 b">
            <div className="myLeftCtn add">
              <header>Add Item</header>
              <h5 className='ItemAdd'>{this.state.youAdded}</h5>
              <form
                className="myForm text-center"
                onSubmit={this.SubmitHandler}
              >

                <div className="form-group">

                  <label>username</label>
                  <input
                    className="myInput ad"
                    type="text"
                    placeholder=" enter your username"
                    name='userName'
                    value={userName}
                    onChange={this.ChangHandler}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">

                  <label>item Title</label>
                  <input
                    className="myInput ad"
                    type="text"
                    name='itemTitle' value={itemTitle} onChange={this.ChangHandler}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>image link</label>
                  <input
                    className="myInput ad"
                    name='image'
                    value={image}
                    onChange={this.ChangHandler}
                  />
                </div>
                <br></br>
                <div className="form-group">

                  <label>description</label>
                  <input
                    className="myInput ad"
                    name='description'
                    value={description}
                    onChange={this.ChangHandler}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">

                  <label>item price</label>
                  <input
                    className="myInput ad"
                    name='price'
                    value={price}
                    onChange={this.ChangHandler}
                    required
                  />
                </div>
                <br></br>
                <div className="form-group">
                  <label>item state</label>
                  <input
                    className="myInput ad"
                    name='state'
                    value={state}
                    onChange={this.ChangHandler}

                  />
                </div>
                <br></br>

                <div class="p-t-10">
                  <button className="form-group btn addbtn" type="submit">
                    Add
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
