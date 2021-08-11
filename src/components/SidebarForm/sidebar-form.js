import React, { Component } from 'react';

export default class SidebarForm extends Component {

    state = {
        travel: null,
        travelPrice: null,
        price: null,
        totalPrice: null,
        from: "",
        to: "",
        travelClass: "camfort", // ecanomy
        classPrice: 1, // 1
        pessengers: 1,
        showChicketPrice: false
    }

    submitHandler = e => {
        e.preventDefault();
        const { travel, from, to, travelClass, price, pessengers, totalPrice } = this.state;
        const submitObj = { tip: travel, from, to, travelClass, price, pessengers, totalPrice }
        this.props.setData(submitObj);
    }

    travelHandler = e => {
        const { value, name } = e.target;

        // flight = 1000$
        // train = 500$
        // ship = 200$
        // car = 50$

        switch (value) {
            case 'flight': this.setState({ [name]: value, travelPrice: 1000, price: this.state.classPrice * 1000 }, () => {
                this.calculate();
            }); break;
            case "trains": this.setState({ [name]: value, travelPrice: 500, price: this.state.classPrice * 500 }, () => {
                this.calculate();
            }); break;
            case "ship": this.setState({ [name]: value, travelPrice: 200, price: this.state.classPrice * 200 }, () => {
                this.calculate();
            }); break;
            case "car": this.setState({ [name]: value, travelPrice: 50, price: this.state.classPrice * 50 }, () => {
                this.calculate();
            }); break;
            default: break;
        }
    }

    travelClassHandler = e => {
        const { name, value } = e.target;

        switch (e.target.value) {
            case "ecanomy":
                this.setState({ [name]: value, classPrice: .5 }, () => {
                    this.calculate();
                });
                break;
            case "camfort":
                this.setState({ [name]: value, classPrice: 1 }, () => {
                    this.calculate();
                });
                break;
            default:
                break;
        }
    }

    inputHandler = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value }, () => {
            this.calculate();
        });
    }

    calculate = () => {
        const { travelPrice, from, to, classPrice, pessengers } = this.state;

        if (travelPrice && from && to && classPrice && pessengers) {
            const price = travelPrice * classPrice;
            const totalPrice = price * pessengers;

            this.setState({
                price,
                totalPrice,
                showChicketPrice: true,
            })
        } else {
            this.setState({
                showChicketPrice: false
            })
        }
    }

    render() {

        const { travel, travelPrice, price, from, to, travelClass, classPrice, pessengers, totalPrice, showChicketPrice } = this.state;

        return (
            <form className="todo__sidebar-form" onSubmit={this.submitHandler}>
                <div className="todo__sidebar-btns">
                    <label>
                        <input type="radio" value="flight" onChange={this.travelHandler} name="travel" required hidden />
                        <div className="btn-travel">
                            <i className="icon">F</i>
                            Flight
                        </div>
                    </label>
                    <label>
                        <input type="radio" value="trains" onChange={this.travelHandler} name="travel" required hidden />
                        <div className="btn-travel">
                            <i className="icon">T</i>
                            Trains
                        </div>
                    </label>
                    <label>
                        <input type="radio" value="ship" onChange={this.travelHandler} name="travel" required hidden />
                        <div className="btn-travel">
                            <i className="icon">SH</i>
                            Ship
                        </div>
                    </label>
                    <label>
                        <input type="radio" value="car" onChange={this.travelHandler} name="travel" required hidden />
                        <div className="btn-travel">
                            <i className="icon">C</i>
                            Cars
                        </div>
                    </label>
                </div>
                <h5>
                    {travelPrice ? travel.toUpperCase() + " price: $" + travelPrice : null}
                </h5>
                <h1 className="title">Tickets4U</h1>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="deportFrom">Depart from</label>
                        <input onChange={this.inputHandler} value={from} name="from" type="text" id="deportFrom" className="form-control" required />
                    </div>
                    <div className="form-group col-12">
                        <label htmlFor="arriveAt">Arrive at</label>
                        <input onChange={this.inputHandler} value={to} name="to" type="text" id="arriveAt" className="form-control" required />
                    </div>
                </div>

                {/* <div className="form-row">
                    <div className="form-group col-6">
                        <label htmlFor="departure-date">Departure Date</label>
                        <input type="date" id="departure-date" className="form-control" required />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="return-date">Return Date</label>
                        <input type="date" id="return-date" className="form-control" required />
                    </div>
                </div> */}

                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="travelClass">Class</label>
                        <select onChange={this.travelClassHandler} value={travelClass} name="travelClass" id="travelClass" className="form-control" required>
                            <option>camfort</option>
                            <option>ecanomy</option>
                        </select>
                    </div>
                    <div className="form-group col-4">
                        <label htmlFor="pessengers">Pessengers</label>
                        <input onChange={this.inputHandler} value={pessengers} name="pessengers" type="number" min="1" max="10" id="pessengers" className="form-control" required />
                    </div>
                </div>
                {
                    showChicketPrice ?
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Tip</th>
                                    <td>{travel}</td>
                                </tr>
                                <tr>
                                    <th>Travel price</th>
                                    <td>{travelPrice}</td>
                                </tr>
                                <tr>
                                    <th>Class</th>
                                    <td>{classPrice * 100}%</td>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <td>{price}$</td>
                                </tr>
                                <tr>
                                    <th>Pessengers</th>
                                    <td>{pessengers}</td>
                                </tr>
                                <tr>
                                    <th>Total Price</th>
                                    <td>{totalPrice}$</td>
                                </tr>
                            </tbody>
                        </table>
                        : null
                }
                <button type="submit" className="btn btn-block btn-blue">Add Todo</button>
            </form>
        )
    }
}
