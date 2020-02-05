import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './user.js'

function App() {
    return (
        <div className="App">
            <div className="container-fluid card-color">
                <div className="row">
                    <div className="col-1"> </div>
                    <div className="col-5">
                        <div className="card mt-2 mb-2">
                            <img className="card-img-top" src={data.results[0].picture.large} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{data.results[0].name.first} {data.results[0].name.last}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.results[0].location.city}</h6>
                                <p className="card-text text-left"> email: {data.results[0].email}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
