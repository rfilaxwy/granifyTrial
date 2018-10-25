// Core imports
import React, {Component} from 'react';

// Vendor libraries
import axios from 'axios';
import {Modal} from 'react-bootstrap'

// Custom
import './index.scss';

export default class Nav extends Component{
    constructor(props,context){
        super(props,context)
        this.state={
            userName: '',
            phoneNumber: '',
            userInputOne: '',
            userInputTwo: '',
            timeStamp: '',
            id:'',
            records:[],
            displayerUsername:'',
            displayerId:'',
            displayerInputOne:'',
            addShow: false,
            deleteShow:false,
            displayShow:false
        }
        this.addRecord = this.addRecord.bind(this);
        this.deleteRecord = this.deleteRecord.bind(this);
        this.displayRecord = this.displayRecord.bind(this);
        this.handleAddShow = this.handleAddShow.bind(this);
        this.handleAddClose = this.handleAddClose.bind(this);
        this.handleDeleteClose = this.handleDeleteClose.bind(this);
        this.handleDeleteShow = this.handleDeleteShow.bind(this);
        this.handleDisplayShow = this.handleDisplayShow.bind(this);
        this.handleDisplayClose = this.handleDisplayClose.bind(this);
        
    }
    componentDidMount(){
        const {records}=this.props;
        this.setState({records:records})
    }
    
    //toggles modal on
    handleAddShow() {
        this.setState({addShow:true})
    }
    //toggles modal off
    handleAddClose() {
        this.setState({addShow:false})
    }
    handleDeleteShow() {
        this.setState({deleteShow:true})
    }
    handleDeleteClose() {
        this.setState({deleteShow:false})
    }
    handleDisplayShow(){
        this.setState({displayShow:true})
    }
    handleDisplayClose(){
        this.setState({displayShow:false})
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
    handleRecId(val){
        this.setState({id:val})
    }

    addRecord(){
        let timestamp = new Date().toISOString().replace('Z','')
        let timeIn = Math.round((new Date().getTime())/3600);
        //takes record info from state and sends to back end via axios.
        const {userName,phoneNumber,userInputOne,userInputTwo}=this.state;
        axios.put('/api/records',{userName,phoneNumber,userInputOne,userInputTwo,timestamp,timeIn}).then(res=>{
            this.setState({userName:'',phoneNumber:'',userInputOne:'',userInputTwo:'',addShow:false})
            
        })
    }
    deleteRecord(){
        const id =this.state.id;
        axios.delete(`/api/records/${id}`).then(result=>{
            this.setState({id:'',deleteShow:false})
        })
    }
    displayRecord(){

        const id = this.state.id;
        const disp = this.props.records.filter(x=>{return x['id']==id})
        this.setState({displayerId:disp[0]['id'], displayerUsername:disp[0]['username'],displayerInputOne:disp[0]['input_one']})
        
    }
    render(){
       
        return(
          <div className='Nav'>
            <div className='nav-bar'>
              <button onClick={this.handleAddShow}>ADD RECORD</button>
              <button onClick={this.handleDeleteShow}>DELETE RECORD</button>
              <button onClick={this.handleDisplayShow}>DISPLAY RECORD</button>
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

                <Modal show={this.state.deleteShow} onHide={this.handleDeleteClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Record</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input placeholder="Record Id" onChange={(e)=>this.handleRecId(e.target.value)}></input>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={this.deleteRecord}>Delete</button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.displayShow} onHide={this.handleDisplayClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Display Record</Modal.Title>
                        <input placeholder="Record Id" onChange={(e)=>this.handleRecId(e.target.value)}></input> 
                        <button onClick={this.displayRecord}>Display</button>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            Id: {this.state.displayerId}<br/>
                            Username: {this.state.displayerUsername}<br/>
                            InputOne: {this.state.displayerInputOne}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}