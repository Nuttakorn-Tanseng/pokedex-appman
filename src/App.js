import React, { Component, useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import './App.css'
import DataFetching from './DataFetching'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import axios from 'axios'


const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}


class App extends Component {



  render() {

    function showcard() {

    }

    return (
      <div className="App">
        
        <center><h1>My Pokedex</h1></center>
        <div className="display">


        <DataFetching />
        </div>

        <Nav className="navbar navbar-light" >
          <Button variant="danger" className="center" onClick={showcard}>
            ADD
          </Button>
          {/* <Popup trigger={<Button variant="danger" className="center" onClick={showcard}>
            ADD
            </Button>} position="">
            <div><DataFetching /></div>
          </Popup> */}
        </Nav>


      </div>
    )



  }
}

export default App
