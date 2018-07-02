import React, { Component } from 'react';
// import bootstrap components
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
// import images
import images from "./images.json";


// const App = () => (
//   <div>
//     <Navbar />
//     <Jumbotron />
//     <Card />
//   </div>  
// );

class App extends Component {
  state = {
    images,
    count: 0
  };

  // clickedImage = id => {
  //   const images = this.state.images.filter(image => image.id !== id);
  //   this.setState({ images });
  // };

  // shuffleCards = () => {
  //   let order = [1,2,3,4,5,6,7,8,9,10,11,12];

  //   let newOrder =  [];
  //   randomNum = order[Math.floor(Math.random() * order.length)];
  //   newOrder.push(randomNum);
  // }
  

  handleClickedStatus = id => {
    const images = this.state.images.filter(image => image.id !== id)
    images.clicked = "true";
    this.setState({ images });
    this.setState({ count: this.state.count + 1 })

  };

  render() {
    return (
      <div>

        <Navbar />
          <Jumbotron 
            count={this.state.count}
          />
        <div className="container card-columns">

          {this.state.images.map(image => (
            <Card 
              handleClickedStatus = {this.handleClickedStatus}
              id={image.id}
              image={image.imagePath}
              clicked={image.clicked}
            />
          ))}

        </div>

      </div>
    );
  }

}

export default App;
