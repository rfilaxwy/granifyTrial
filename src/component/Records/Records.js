import React from 'react';

export default function Records(props){
    
   return(
            <div key={props.index} className='recordCard'>
                <p className='tag>'>ID: {props.id}</p>
                <p className='tag'>User: {props.username}</p> 
                <p className='tag'>I1:{props.input_one} </p> 
                <p className='tag'>I2:  {props.input_two}</p>
                
            </div>
        )
   
}