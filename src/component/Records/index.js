import React from 'react';


export default function Records(props){
    // class the P elements w/ media queries
   return(
            <div 
                key={props.index} 
                className="recordCard"
            >
                <p className="id-field">
                    <span>ID:</span>
                    {props.id}
                </p>
                <p><span className='tag'>User:</span> {props.username}</p> 
                <p><span className='tag'>I1:</span>{props.input_one} </p> 
                <p><span className='tag'>I2:</span>  {props.input_two}</p>
                
            </div>
        )
   
}