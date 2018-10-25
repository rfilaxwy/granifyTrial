import React, { Component } from 'react';


//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import axios from 'axios';

// Custom
import './App.css';
import Nav from './component/Nav/';
import Stat from './component/Stat/';
import Records from './component/Records/';


class App extends Component {
  constructor() {
    super()
    this.state = {
      records: [],
      highestId: '',
      recordsPerHour: ''
    } 
  }

  componentDidMount() {
    // //First post time.
    const start = 427885725;
    let newest, length;

    axios.get('/api/records').then((res) => {
      let records= res.data;
      this.setState({records:records})
        return axios.get('/api/times').then(result=>{
          newest=result.data[0]['time_stamp'];
          return axios.get('./api/length').then(result=>{
            length=result.data[0]['count'];
              let recsPerHour = Math.round((newest-start)/length);
              this.setState=({recordsPerHour:recsPerHour})
          })
        })
    });     
  }
  // componentDidUpdate() {
  //   // //First post time.
  //   const start = 427885725;
  //   let newest, length;

  //   axios.get('/api/records').then((res) => {
  //     let records= res.data;
  //     this.setState({records:records})
  //       return axios.get('/api/times').then(result=>{
  //         newest=result.data[0]['time_stamp'];
  //         return axios.get('./api/length').then(result=>{
  //           length=result.data[0]['count'];
  //             let recsPerHour = Math.round((newest-start)/length);
  //             this.setState=({recordsPerHour:recsPerHour})
  //         })
  //       })
  //   });     
  // }

  render() {
    
    const displayRecords = this.state.records.map((record, i) => {
      return (<Records
        index={i}
        id={record.id}
        username={record.username}
        input_one={record.input_one}
        input_two={record.input_two}
      />)
    });
   
    const recsPerHour= this.state.recordsPerHour;
    
    return (
      <div className="App">
        <Nav
          records={this.state.records}
        />
        <div className='stats'>
          <Stat
            recsPer={recsPerHour}
             />
        </div>
        <div className='recs'>{displayRecords}</div>

      </div>
    );
  }
}

export default App;
