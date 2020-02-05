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
                            <img className="card-img-top" data-testid="user-img" src={data.results[0].picture.large} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title"><div data-testid={'name'}>{data.results[0].name.first} {data.results[0].name.last}</div></h5>
                                <h6 className="card-subtitle mb-2 text-muted">{data.results[0].location.city}</h6>
                                <p className="card-text text-left"> <b>Age:</b> {data.results[0].dob.age}</p>
                                <p className="card-text text-left"> <b>Email:</b><span data-testid="mail"> {data.results[0].email}</span></p>
                                <p className="card-text text-left"> <b>Phone:</b> {data.results[0].phone}</p>
                                <p className="card-text text-left"> <b>Cell:</b> {data.results[0].cell}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;
