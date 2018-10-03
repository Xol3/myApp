import React, { Component } from 'react';
import Counter from './Change.js';
import Sub from './Sub.js'



class Click extends Component {
  constructor(props) {
    //allows access to child  comps
    super(props);

    this.state = {
      count: 0
    };
    //bind the funcs to have access to this Click
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }
//this is the event handeler and it should always be on the even trigger
  increase(e){
    this.setState({
      count: this.state.count + 1
    });
  }

  decrease(e){
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {

    return (
      <div>
        <Counter display={this.state.count} />
        <button onClick={() => this.increase()}>+</button>
        <break/>
        //set var to the function that you want to allow access to
        <Sub trigger={this.decrease} />
      </div >
    );
  }
}

export default Click;
