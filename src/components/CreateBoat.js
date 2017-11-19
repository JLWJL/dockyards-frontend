import React from 'react';
import { Link } from 'react-router-dom';

export default class NewJob extends React.Component {

  constructor () {
    super();

    this.state = {
      errMsg: '',
      name: '',
      type: '',
      photo: 'http://via.placeholder.com/350x150/51A143',
      length: '',
      work_description: '',
      arrival_date: '',
      delivery_date: '',
      status: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    this.setState({
      [inputName]: inputValue,
    });
  }

  handleSubmit (event) {
    event.preventDefault();

    //Collect data
    let form = document.getElementById('create-boat-form');
    const formData = new FormData(form); //multipart/form-data format

    fetch('http://localhost:3000/boats', {
      method: 'POST',
      body: JSON.stringify(this._convertToObj(formData)),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      if (res.ok) {
        alert('Created');
        this.props.history.push('/');
      }
      else {
        throw new Error(res.statusText);
      }
    })
      .catch(err=>{
        alert("Error: ", err);
    })
  }

  _convertToObj (formData) {
    let jsonFormData = {};
    for (let entry of formData.entries()) {
      jsonFormData[entry[0]] = entry[1];
    }
    return jsonFormData;
  }

  render () {
    return (
      <div>
        <h2>Create boat record</h2>
        <hr/>
        <form id="create-boat-form" onSubmit={this.handleSubmit}
              encType="multipart/form-data">
          <p style={{color: 'red'}}>{this.state.errMsg}</p>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control" id="name"
                   placeholder="Boat name"
                   onChange={this.handleChange} value={this.state.name}
                   required/>
          </div>
          <div className="form-group">
            <label htmlFor="type">Type</label>
            <input type="text" name="type" className="form-control"
                   id="type" placeholder="Boat type"
                   onChange={this.handleChange} value={this.state.type}
                   required/>
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input type="url" name="photo" className="form-control"
                   readOnly="true"
                   id="photo" placeholder="Photo url"
                   value={this.state.photo}
                   required/>
          </div>
          <div className="form-group">
            <label htmlFor="length">Length</label>
            <input type="number" name="length" className="form-control"
                   id="length" placeholder="Boat length"
                   onChange={this.handleChange} value={this.state.length}/>
          </div>
          <div className="form-group">
            <label htmlFor="work-description">Work description</label>
            <input type="text" name="work_description" className="form-control"
                   id="work-description" placeholder="Work description"
                   onChange={this.handleChange}
                   value={this.state.workDescription}/>
          </div>
          <div className="form-group">
            <label htmlFor="arrival-date">Arrive date</label>
            <input type="date" name="arrival_date" className="form-control"
                   id="arrival-date"
                   placeholder="yyyy/mm/dd"
                   onChange={this.handleChange} value={this.state.arrivalDate}/>
          </div>

          <div className="form-group">
            <label htmlFor="delivery-date">Delivery date</label>
            <input type="date" name="delivery_date" className="form-control"
                   id="delivery-date"
                   placeholder="yyyy/mm/dd"
                   onChange={this.handleChange}
                   value={this.state.deliveryDate}/>
          </div>

          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input type="text" name="status" className="form-control"
                   id="status" placeholder="Status"
                   onChange={this.handleChange} value={this.state.status}/>
          </div>

          <button type="submit" className="btn btn-primary"
                  onClick={(e) => {this.handleSubmit(e);}}>Create
          </button>
          <Link to='/boats' className="btn btn-danger">Cancel</Link>
        </form>

      </div>
    );
  }
}



