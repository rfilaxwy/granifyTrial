import React from 'react';

export default function Records(props){
    
   return(
            <div key={props.index} className='recordCard'>
                <p>
                <span className='tag'>User:</span> {props.username} <br/>
                <span className='tag'>I1:</span> {props.input_one} <br/>
                <span className='tag'>I2:</span>  {props.input_two}
                </p>
            </div>
        )
   
}