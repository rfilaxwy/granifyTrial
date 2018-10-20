import React, {Component} from 'react';
import './Nav.css';
import axios from 'axios';

export default class Landing extends Component{
    constructor(){
        super()
        this.state={
            userInput:'',
            userName:'',
            phoneNumber:'',
            recordId:'',
        }
    }
    addRecord(){
        //takes record info from state and sends to back end via axios.
        const {userInput, userName,phoneNumber}=this.state;
        axios.put('/api/record',{userInput, userName,phoneNumber}).then(res=>{
            console.log(res)
        })
    }
    deleteRecord(){
        //takes id from selected record and sends request to backend to delete record via axios.
    }
    displayRecord(){

    }
    render(){
        return(
            <div className='nav'>
                <div className='nav-bar'>
                    <button onClick={this.handleShow}>ADD RECORD</button>
                    <button onClick={this.deleteRecord()}>DELETE RECORD</button>
                    <button onClick={this.displayRecord}>DISPLAY RECORD</button>
                </div>
            </div>
        )
    }
}