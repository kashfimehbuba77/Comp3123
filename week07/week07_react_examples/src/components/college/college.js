import React from 'react';

class College extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 100,
      name: "Kashfi",
    };
  }

  render() {
    const collegeStyle = { fontSize: 13}; 
    return <h1 style={collegeStyle}>George Brown College, Toronto</h1>;
  }
}

export default College;
