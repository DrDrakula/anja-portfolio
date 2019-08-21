import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap'

import ImageCard from './ImageCard'

import './App.css';
import './animate.css';

class App extends Component{

  state = {
    yearSelected: false,
    years: {
      "2017": false,
      "2018": false,
      "2019": false,
    },
    images: {
      "2017": [
        { imagePath: "./static/images/2017-1.jpg" },
        { imagePath: "./static/images/2017-2.jpg" },
        { imagePath: "./static/images/2017-3.jpg" },
        { imagePath: "./static/images/2017-4.jpg" },
        { imagePath: "./static/images/2017-6.jpg" },
        { imagePath: "./static/images/2017-7.jpg" },
        { imagePath: "./static/images/2017-5.jpg" },
      ],
      "2018": [
        { imagePath: "./static/images/2018-1.jpg" },
        { imagePath: "./static/images/2018-2.jpg" },
        { imagePath: "./static/images/2018-3.jpg" },
        { imagePath: "./static/images/2018-4.jpg" },
        { imagePath: "./static/images/2018-6.jpg" },
        { imagePath: "./static/images/2018-7.jpg" },
        { imagePath: "./static/images/2018-5.jpg" },
      ],
      "2019": [
        { imagePath: "./static/images/2019-1.jpg" },
        { imagePath: "./static/images/2019-2.jpg" },
        { imagePath: "./static/images/2019-3.jpg" },
        { imagePath: "./static/images/2019-5.jpg" },
        { imagePath: "./static/images/2019-6.jpg" },
        { imagePath: "./static/images/2019-7.jpg" },
        { imagePath: "./static/images/2019-8.jpg" },
        { imagePath: "./static/images/2019-9.jpg" },
        { imagePath: "./static/images/2019-10.jpg" },
        { imagePath: "./static/images/2019-11.jpg" },
        { imagePath: "./static/images/2019-12.jpg" },
        { imagePath: "./static/images/2019-13.jpg" },
        { imagePath: "./static/images/2019-14.jpg" },
        { imagePath: "./static/images/2019-15.jpg" },
        { imagePath: "./static/images/2019-16.jpg" },
        { imagePath: "./static/images/2019-17.jpg" },
        { imagePath: "./static/images/2019-18.jpg" },
        { imagePath: "./static/images/2019-19.jpg" },
        { imagePath: "./static/images/2019-20.jpg" },
        { imagePath: "./static/images/2019-21.jpg" },
        { imagePath: "./static/images/2019-22.jpg" },
        { imagePath: "./static/images/2019-23.jpg" },
        { imagePath: "./static/images/2019-24.jpg" },
        { imagePath: "./static/images/2019-25.jpg" },
        { imagePath: "./static/images/2019-26.jpg" },
        { imagePath: "./static/images/2019-27.jpg" },
        { imagePath: "./static/images/2019-28.jpg" },
        { imagePath: "./static/images/2019-29.jpg" },
        { imagePath: "./static/images/2019-30.jpg" },
        { imagePath: "./static/images/2019-31.jpg" },
      ],
    }
  }

  handleClickYear = (e) => {
    let years = {}
    for(let year in this.state.years){
      if(year === e.target.innerText){
        years[year] = true
      }else{
        years[year] = false
      }
    }

    this.setState({...this.state, years, yearSelected: true})
  }

  displayImages = () => {
    if(this.state.years["2017"]){
      return this.state.images["2017"].map((image, index) => {
        return <ImageCard key={index} imagePath={image.imagePath} activeIndex={index} images={this.state.images["2017"]} />
      })
    }else if(this.state.years["2018"]){
      return this.state.images["2018"].map((image, index) => {
        return <ImageCard key={index} imagePath={image.imagePath} activeIndex={index} images={this.state.images["2018"]} />
      })
    }else if(this.state.years["2019"]){
      return this.state.images["2019"].map((image, index) => {
        return <ImageCard key={index} imagePath={image.imagePath} activeIndex={index} images={this.state.images["2019"]} />
      })
    }
  }


  render(){

    return (
      <div className="App">
        <div className="App-header">
          <div id="navbar">
            <div id="welcome-header">
              <h1>WELCOME</h1>
              <h3>To Anja's Art Portfolio</h3>
            </div>
            <div id="line"><hr/></div>
            <div id="years">
              <div className="year" style={this.state.years["2017"] ? {color: "black"} : null} onClick={this.handleClickYear}>2017</div>
              <div className="year" style={this.state.years["2018"] ? {color: "black"} : null} onClick={this.handleClickYear}>2018</div>
              <div className="year" style={this.state.years["2019"] ? {color: "black"} : null} onClick={this.handleClickYear}>2019</div>
            </div>  
          </div>

          <Container style={this.state.yearSelected ? {paddingTop:"0"} : null}>
            <Row>
              {
                this.state.yearSelected ? 
                  this.displayImages()
                :
                  null
              }
            </Row>
          </Container>
        </div>
      </div>
    );  
  }
}

export default App;
