import React, { Component } from 'react'
import FavCard from './FavCard'
export default class Favorite extends Component {
    componentWillUpdate() {
        localStorage.setItem('FavArray', JSON.stringify(this.props.FavArray));
    }
    render() {
        const ItemCard = this.props.FavArray.map((item, key) => {
            return (
                <FavCard
                    key={key}
                    item={item}
                    getFav={this.props.getFav}
                    removeFav={this.props.removeFav}
                />
                // console.log('test',item)
                // console.log('key',key.userName)
            )
        })
        return (
            <div className="topHeader">
                <h1>Your Favorite List</h1>
                <button type="button" class="btn btn-outline-danger btnMore" onClick={this.props.deleteFav}> Clear List</button>
                <div className="topHeader boot">{ItemCard}</div>
            </div>
        )
    }
}
