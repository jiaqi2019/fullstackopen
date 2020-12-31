import React, { useState } from 'react';


export default function (){
  const [counter, setcount] = useState(0)
  const increaseByOne = () => setcount(counter +1)
  const decreaseByOne  = () => setcount(counter - 1)
  const setToZero  = () => setcount(0)
  return (
    <div>
      <Display count = {counter} />
      <Button handleClick={increaseByOne} text='plus'/>
      <Button handleClick={decreaseByOne} text='zero'/>
      <Button handleClick={setToZero} text='minus'/>
    </div>
  )
}


export const Button = ({handleClick,text})=>{
  return <button onClick={handleClick}>{text}</button>
}

export const Display = ({count})=> <div>{count}</div>