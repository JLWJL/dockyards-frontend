import React from 'react';
import {Link} from 'react-router-dom';

export default class BoatsList extends React.Component{
  constructor(){
    super();
    this.state = {
      boats: [],
    };
  }

  componentDidMount () {
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
    })
    .then(res => {
      this.setState({
        boats: res
      });
    });
  }

  render(){
    const boatList = this.state.boats.map((boat,i)=>{
      return(
        <div key={i} className="col-12 col-sm-3 col-lg-4">
          <Link to="#">
            <img className="img-fluid" src={boat.photo} alt="boat image"/>
          </Link>
          <div>
            <Link to="#"><strong>{boat.name}</strong></Link>
          </div>
        </div>
      )
    });

    return(
      <div className="c-all-boats container">
        <div className="row">
          {boatList}
        </div>
        <Link to="/boats/create" className="btn btn-primary">New record</Link>
      </div>
    );
  }

}
