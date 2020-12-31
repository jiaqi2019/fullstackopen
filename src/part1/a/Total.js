import React from 'react';

export default (props)=>{
  return (
    <p>Number of exercises 
    {
      " " + props.parts.reduce((a,b)=>{
        return a + b.exercises
      }, 0)
    }
    </p>
  )
}