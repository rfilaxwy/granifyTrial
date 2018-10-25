import React, {Component} from 'react';
import './index.scss';


export default class Stat extends Component{
    constructor(props){
        super(props)
        this.state={
            recordsPerHour:'',
            deletedPerHour:''
        }
    }
    render(){
        console.log(this.props)
        return(
            <div className='stat-holder'>
                {/* THIS DATA WILL COME FROM DB TIMESTAMPS  */}
                <div className='stamp'>Records Added/Hr: xx</div>
                <div className='stamp'>Adds/Hr  xx | xx Deletes/Hr</div>
            </div>
        )
    }
}