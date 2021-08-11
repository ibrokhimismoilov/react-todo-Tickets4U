import React, { Component } from 'react';

export default class MainSearch extends Component {
    state = {
        activeIndex: 0,
        sortBtns: [
            { id: 0, label: "Normal" },
            { id: 1, label: "Tip" },
            { id: 2, label: "Count" },
            { id: 3, label: "Total price" },
        ],
    }

    btnActiveHandler = id => {
        this.setState({ activeIndex: id });
        this.props.dataFilterBtns(this.state.sortBtns[id].label)
    }

    render() {
        var current = this.state.activeIndex;
        var getClass = function (index) {
            if (index === current) return 'btn-sort btn-blue-outline active';
            return 'btn-sort btn-blue-outline';
        };


        const btns = (
            this.state.sortBtns.map((item, index) => {
                return (
                    <button
                        key={item.id}
                        className={getClass(index)}
                        onClick={() => this.btnActiveHandler(item.id)} >
                        {item.label}
                    </button>
                )
            })
        )

        return (
            <div className="main-search d-flex">
                <div className="main-search__text">
                    <h1 className="title">Search results</h1>
                    <h4 className="text">We found <b className="text-blue">{this.props.dataLendth > 1 ? `${this.props.dataLendth} results` : `${this.props.dataLendth} result`}</b></h4>
                </div>
                <div className="main-search__btns">
                    {btns}
                    {/* <button className="btn-sort btn-blue-outline">Tip</button>
                    <button className="btn-sort btn-blue-outline">Count</button>
                    <button className="btn-sort btn-blue-outline">Total price</button>
                    <button className="btn-sort btn-blue-outline active">normal</button> */}
                </div>
            </div>
        )
    }
}
