import React, {Component} from 'react';

export default class Stat extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div>avg records/hr</div>
                <div>chrun rate -records added vs deleted/hr</div>
            </div>
        )
    }
}