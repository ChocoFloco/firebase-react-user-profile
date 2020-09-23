import React, { Component } from 'react';
import './Ribbon.css'

export default class Ribbon extends Component {
    render(){
        return(
            <div className="corner-ribbon top-right sticky main-color">{this.props.children}</div>
        )
    }
}
    