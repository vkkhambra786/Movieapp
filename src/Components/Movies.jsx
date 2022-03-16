import React, { Component } from "react";

import axios from "axios";
//import { hover } from "@testing-library/user-event/dist/hover";
export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hover: " ",
      parr: [1],
      curPage: 1,
      movies: [],
    };
  }

  async componentDidMount() {
    let res = await axios.get(`https://movie-fake-server.herokuapp.com/data`);
    console.log("res", res);
    let data = res.data;
    console.log("data", data);
    this.setState({
      movies: [...data.results],
    });
  }
  render() {
    //let movie = movies.results;
    return (
      <div>
        <div style={{ border: "1px solid red" }}>
          <h3 className="text-center">Trending</h3>
          {this.state.movies.map((movieobj) => (
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>

              {this.state.parr.map((value) => (
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
              ))}

              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
