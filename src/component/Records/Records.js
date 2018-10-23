import React from 'react';

export default function Records(props){
    
   return(
            <div key={props.index} className='recordCard'>
                <p><span className='tag'>ID:</span> {props.id}</p>
                <p><span className='tag'>User:</span> {props.username}</p> 
                <p><span className='tag'>I1:</span>{props.input_one} </p> 
                <p><span className='tag'>I2:</span>  {props.input_two}</p>
                
            </div>
        )
   
}