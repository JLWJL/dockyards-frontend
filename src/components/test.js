import React from 'react';

export default class Test extends React.Component {

  constructor () {
    super();
    this.state = {
      boats: [],
    };
  }

  componentDidMount () {
    this._fetchData(2).then(res => {
      this.setState({
        boats: res
      });
    });
  }

  _fetchData (id) {
    return fetch(`http://localhost:3000/boats/${id}`, {
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
    })
      .then(boat=>{
        return fetch('http://localhost:3000/workers', {
          method: 'GET',
          header: {
            'Content-Type': 'application/json'
          }
        })
          .then(res=>{
            let workersJson = "";
            if(res.ok){
              return workersJson = res.json();
            }
          })
        .then(wokers=>{
            let validWorkers = wokers.filter((worker)=>{
              // let bid = id;
              return worker.boatIds.includes(id);
            });
            boat = Object.assign(boat, {workers: validWorkers});
            return boat;
        });
    })






    // return fetch('http://localhost:3000/boats', {
    //   method: 'GET',
    //   header: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => {
    //   if (res.ok) {
    //     return res.json();
    //   }
    //   else {
    //     throw new Error(res.statusText);
    //   }
    // });
  }

  render () {

    return (
      <p>
        <span>Hello World</span>

          {JSON.stringify(this.state.boats)}
      </p>
    );
  }
}