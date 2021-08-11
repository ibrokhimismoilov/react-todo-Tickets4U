import React from 'react';

export default function MainData({data}) {
    return (
        <div className="main-data table-responsive">
            <table className="table table-lg table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>From / To</th>
                        <th>Tip</th>
                        <th>Class</th>
                        <th>Price</th>
                        <th>Pessengers</th>
                        <th>Total price</th>
                        {/* <th>Edit</th> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item=> {
                            return (
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.from} / {item.to}</td>
                                    <td>{item.tip}</td>
                                    <td>{item.travelClass}</td>
                                    <td>{item.price}$</td>
                                    <td>{item.pessengers}</td>
                                    <td>{item.totalPrice}$</td>
                                    {/* <td><button className="btn btn-sm btn-blue">Edit</button></td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
