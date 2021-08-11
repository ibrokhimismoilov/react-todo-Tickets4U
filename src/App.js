import './App.css';
import React, { Component } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

// data: [
//   { _id: ++maxId, from: "Fergana", to: "New York", tip: "flight", travelClass: "Comfort", price: 1000, pessengers: 3, totalPrice: 3000 },
//   { _id: ++maxId, from: "Andijon", to: "Moscow", tip: "trains", travelClass: "Ecanomy", price: 250, pessengers: 2, totalPrice: 500 },
//   { _id: ++maxId, from: "AQSH", to: "China", tip: "ship", travelClass: "Ecanomy", price: 100, pessengers: 7, totalPrice: 700 },
//   { _id: ++maxId, from: "Fergana", to: "Tashkent", tip: "car", travelClass: "Comfort", price: 50, pessengers: 4, totalPrice: 200 },
// ]
let maxId = 0;
export default class App extends Component {

  state = {
    data:[],
    filterData: [],
    isFilteringData: false,
    pageCount: 0,
    pageLength: 5,
    pages: [],
    pageData: [],
    pagination: [],
  }

  setData = obj => {
    console.log(obj);
    const data = [...this.state.data, { _id: ++maxId, ...obj }];
    this.setState({ data }, () => {
      this.paginationCalculate();
    });
  }

  paginationCalculate = () => {
    let data = [...this.state.data];
    let pageLength = this.state.pageLength;
    let pageCount = Math.ceil(data.length / pageLength);
    let pages = [];
    let pagination = [];
    for (let i = 0; i < pageCount; i++) {
      pages.push(data.slice((i * pageLength), ((i + 1) * pageLength)));
      pagination.push(i);
    }
    this.setState({ pages, pageCount, pagination })
  }

  paginationHandler = index => {
    let pageData = [...this.state.pages[index]]
    console.log("pageData", pageData);
    this.setState({pageData});

  }

  dataFilterBtns = (filter) => {
    // console.log(filter);
    const newFilterData = this.state.pageData.length ? [...this.state.pageData] : [...this.state.data];

    switch (filter) {
      case "Tip":
        newFilterData.sort(function (first, second) {
          if (first.tip > second.tip) return 1;
          if (first.tip < second.tip) return -1;
          return 0;
        });

        this.setState({
          filterData: newFilterData,
          isFilteringData: true,
        })
        break;

      case "Count":
        newFilterData.sort(function (first, second) {
          if (first.pessengers > second.pessengers) return 1;
          if (first.pessengers < second.pessengers) return -1;
          return 0;
        });

        this.setState({
          filterData: newFilterData.reverse(),
          isFilteringData: true,
        })
        break;

      case "Total price":
        newFilterData.sort(function (first, second) {
          if (first.totalPrice > second.totalPrice) return 1;
          if (first.totalPrice < second.totalPrice) return -1;
          return 0;
        });

        this.setState({
          filterData: newFilterData.reverse(),
          isFilteringData: true,
        })
        break;

      default:
        this.setState({
          filterData: this.state.data,
          isFilteringData: false,
        }); break;
    }
  }

  render() {
    const { data, filterData, isFilteringData, pageData, pagination } = this.state;
    // console.log("pages", pages);
    return (
      <div className="todo container">
        <div className="row">
          <div className="col-md-4 border-right todo__sidebar">
            <Sidebar setData={this.setData} />
          </div>
          <div className="col-md-8 todo__main">
            <Main
              paginationHandler={this.paginationHandler}
              pagination={pagination}
              data={isFilteringData ? filterData : pageData.length ? pageData : data}
              dataLendth={isFilteringData ? filterData.length : data.length}
              dataFilterBtns={this.dataFilterBtns} />
          </div>
        </div>
      </div>
    )
  }
}
