import React, {Component} from 'react';
import './Stat.css';
export default class Stat extends Component{
    constructor(){
        super()
        this.state={
            recordsPerHour:'',
            churnRate:''
        }
    }
    render(){
        return(
            <div className='stat-holder'>
                <div className='stamp'>avg records/hr</div>
                <div className='stamp'>chrun rate -records added vs deleted/hr</div>
            </div>
        )
    }
}