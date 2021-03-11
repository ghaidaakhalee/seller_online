import React, { Component } from 'react'
import EditItem2 from './EditItem2'


export default class EditItem extends Component {
   
    render() {
        
            const currentRoute = window.location.pathname
            const id = currentRoute.split('/EditItem/:');
            return (
        
            <div>
       <EditItem2 itemId={id[1]}></EditItem2>
      </div>
            )
    }
}