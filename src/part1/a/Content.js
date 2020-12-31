import React from 'react';

export default (props)=>{
  return (<> 
    {
      props.parts.map(item =>{
       return <Part key={item.name} name={item.name} exercises={item.exercises}/>
      })
    }
  </>)
}

const Part = (props) => (<p>{props.name} {props.exercises}</p>)


