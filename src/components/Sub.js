import React from 'react';
//dont need to export the class export
class Sub extends React.Component {

  render() {
    return (
      <div>
        //set var to the super parent props to trigger
        <button onClick={this.props.trigger}>-</button>
      </div >
    );
  }
}

export default Sub;
