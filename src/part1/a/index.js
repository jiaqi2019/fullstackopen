

import React, {useState} from 'react';
import Header from './Header'
import Content from './Content'
import Total from './Total'


export default function(){
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const [counter, setcount] = useState(0)
  // setTimeout(()=> setcount(counter + 1), 1000)
  console.log(counter);
  return (<>
    <Header course={course} />
    <Content parts={parts} />
    <Total  parts={parts}/>
    {counter}
    <button onClick={()=>{setcount(counter+1); console.log('click:',counter)}}>add</button>
    {/* <button onClick={setcount(counter+1)}>add</button> */}  {/* 是函数调用，导致无限渲染 */}
  </>)
}











