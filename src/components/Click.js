import React, { Component } from 'react';
import Counter from './Change.js'



class Click extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
    this.increase = this.increase.bind(this);
  }
//this is the event handeler and it should always be on the even trigger
  increase(e){
    this.setState({
      count: this.state.count + 1
    });
  }


  render() {

    return (
      <div>
        <Counter display={this.state.count} />
        <button onClick={() => this.increase()}>+</button>
      </div >
    );
  }
}

export default Click;
