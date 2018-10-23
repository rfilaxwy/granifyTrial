import React, { Component } from 'react';
import Records from './component/Records/Records';
import axios from 'axios';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import Nav from './component/Nav/Nav';
import Stat from './component/Stat/Stat';




class App extends Component {
  constructor(){
    super()
    this.state={
      records:[]
    }
  }
  componentDidMount(){
    axios.get('/api/records').then(result=>{
        console.log(result.data)
        this.setState({records:result.data})
        
    })
} 
  render() {
    const displayRecords = this.state.records.map((record,i)=>{
      return(<Records
        index={i}
        username={record.username}
        input_one={record.input_one}
        input_two={record.input_two}
      />)
    })
    return (
      <div className="App">
          <Nav/>
          <div className='stats'>
            <Stat/>
          </div>
          <div className='recs'>{displayRecords}</div>
          
      </div>
    );
  }
}

export default App;
