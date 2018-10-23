import React, {Component} from 'react';
import './Nav.css';
import axios from 'axios';
import {Modal} from 'react-bootstrap'



  

export default class Landing extends Component{
    constructor(props,context){
        super(props,context)
        this.state={
            userName: '',
            phoneNumber: '',
            userInputOne: '',
            userInputTwo: '',
            timeStamp: '',
            records:[],
            addShow: false
        }
        this.addRecord = this.addRecord.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.displayRecord = this.displayRecord.bind(this);
        this.handleAddShow = this.handleAddShow.bind(this);
        this.handleAddClose = this.handleAddClose.bind(this);
        
    }

    //Functions
    

    //toggles modal on
    handleAddShow() {
        this.setState({addShow:true})
    }
    //toggles modal off
    handleAddClose() {
        this.setState({addShow:false})
    }
        //input handlers
    handleAddUsername(val){
        this.setState({userName:val})
    }
    handleAddPhone(val){
        this.setState({phoneNumber:val})
    }
    handleAddInputOne(val){
        this.setState({userInputOne:val})
    }
    handleAddInputTwo(val){
        this.setState({userInputTwo:val})
    }
    //NEED TO ADD FUNCTIONALITY
    reset(){}

    addRecord(){
        var timestamp = new Date().toISOString().slice(0, 19).replace('T', ' ');
        //takes record info from state and sends to back end via axios.
        const {userName,phoneNumber,userInputOne,userInputTwo}=this.state;
        axios.put('/api/records',{userName,phoneNumber,userInputOne,userInputTwo,timestamp}).then(res=>{
            this.setState({userName:'',phoneNumber:'',userInputOne:'',userInputTwo:'',posts:res.data,addShow:false})
        })
    }
    deleteRecord(){
        //takes id from selected record and sends request to backend to delete record via axios.
    }
    displayRecord(){

    }
    render(){
       
        return(
            <div>
            <div className='nav'>
                <div className='nav-bar'>
                    <button onClick={this.handleAddShow}>ADD RECORD</button>
                    <button onClick={this.deleteRecord()}>DELETE RECORD</button>
                    <button onClick={this.displayRecord}>DISPLAY RECORD</button>
                </div>
                <Modal show={this.state.addShow} onHide={this.handleAddClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Record</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input placeholder='username' onChange={(e)=>{this.handleAddUsername(e.target.value)}}></input>
                        <input placeholder='phone number' onChange={(e)=>{this.handleAddPhone(e.target.value)}}></input>
                        <br/>
                        <input placeholder='First Input' onChange={(e)=>{this.handleAddInputOne(e.target.value)}}></input>
                        <input placeholder='Second Input' onChange={(e)=>{this.handleAddInputTwo(e.target.value)}}></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={this.addRecord}>Add Record</button>
                        <button onClick={this.handleAddClose }>Close</button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        )
    }
}