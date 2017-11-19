import React from 'react';

export default class Assignment extends React.Component {
  constructor () {
    super();
    this.state = {
      workers: [],
      assignedBoats: [],
      unAssignedBoats: [],
    };
  }

  componentDidMount () {
    //Load drop-down selection for workers
    this._fetchAllWorkers().then(workers => {
      this.setState({
        workers: workers,
      });
    });
  }

  handleSelectChange (e) {
    let workerId = e.target.value;
    let selectedWorker = this.state.workers.find((worker) => {
      return parseInt(worker.id) === parseInt(workerId);
    });

    let assignedBoats = selectedWorker.boatIds;
    this.setState({
      assignedBoats: assignedBoats,
    });

    // return fetch(`http://localhost:3000/boats`, {
    //   method: 'GET',
    // }).then(res => {
    //   if (res.ok) {
    //     return res.json();
    //   }
    //   else {
    //     throw new Error(res.statusText);
    //   }
    // }).then(boats => {
    //   return boats.filter((boat) => {
    //     return boatIds.includes(parseInt(boat.id));
    //   });
    // }).then(assignedBoats => {
    //   this.setState({
    //     assignedBoats: assignedBoats,
    //   });
    // });
  }

  _fetchAllWorkers () {
    return fetch(`http://localhost:3000/workers`, {
      method: 'GET',
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
    const workersList = this.state.workers.map((worker, i) => {
      return (
        <option key={i}
                value={worker.id}>{`${worker.id}. ${worker.name}`}</option>
      );
    });

    const assignedBoats = this.state.assignedBoats.map((boatId, i) => {
      return (
        <option key={i} value={boatId}>{`${boatId}.`}</option>
      );
    });

    return (
      <form>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <label className="mr-sm-2" htmlFor="workersList">Workers</label>
            <select className="custom-select mb-2 mr-sm-2 mb-sm-0"
                    id="workersList"
                    onChange={(e) => {this.handleSelectChange(e);}}>
              <option defaultValue>Choose a worker</option>
              {workersList}
            </select>
          </div>
          <div className="col-auto">
            <label
              className="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0"
              htmlFor="assignedBoat">Boats</label>
            <select className="custom-select mb-2 mr-sm-2 mb-sm-0"
                    id="assignedBoat">
              <option defaultValue>Choose a boat</option>
              {assignedBoats}
            </select>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}