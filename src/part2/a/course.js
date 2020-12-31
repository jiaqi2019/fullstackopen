import React from 'react';


export default function({course}){
  return (
    <>
    {course.map(item => {
      return (
        <div key={item.id}>
          <Header text={item.name} />
          <Content parts={item.parts}/>
        </div>
      )
    })}
    </>
  )
}


const Header = ({text}) => <h1>{text}</h1>

const Content = ({parts}) => {
  var total = parts.reduce((a,b) =>a + b.exercises, 0)
  return (
    <>
    {
      parts.map(part=>{
        return <Part part={part} key={part.id}/>
      })
    }
    <p>total of {total} exercises</p>
    </>
  )
}

const Part = ({part}) => <p>{part.name + ' ' + part.exercises}</p>
