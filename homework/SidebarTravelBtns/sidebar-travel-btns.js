import React, { Component } from 'react';

export default class SidebarTravelBtns extends Component {
    render() {
        return (
            <div className="todo__sidebar-btns">
                <button className="active">
                    <i className="icon">a</i>
                    Flight
                </button>
                <button>
                    <i className="icon">a</i>
                    Trains
                </button>
                <button>                    
                    <i className="icon">a</i>
                    Ship
                </button>
                <button>
                    <i className="icon">a</i>
                    Cars
                </button>
            </div>
        )
    }
}