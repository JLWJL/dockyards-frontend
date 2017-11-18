import React from 'react';

export default class Test extends React.Component {

  constructor () {
    super();
    this.state = {
      boats: [],
    };
  }

  componentDidMount () {
    this._fetchData().then(res => {
      this.setState({
        boats: res
      });
    });
  }

  _fetchData () {
    return fetch('http://localhost:3000/boats', {
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      else {
        throw new Error(res.statusText);
      }
    });
  }

  render () {
    const data = this.state.boats.map((boat, i) => {
      return (
        <li>{boat.name}</li>
      );
    });
    return (
      <p>
        <h1>Hello World</h1>
        <ul>
          {data}
        </ul>
      </p>
    );
  }
}