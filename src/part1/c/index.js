import React, { useState } from 'react';


export default function (){
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [all, setAll] = useState([])

  const increaseLeft = () =>{
    setLeft(left +1)
    setAll(all.concat("L"))
  } 
  const increaseRight  = () => {
    setRight(right + 1)
    setAll(all.concat("R"))
  }
  return (
    <div>
      {left}
      <Button handleClick={increaseLeft} text='left'/>
      <Button handleClick={increaseRight} text='right'/>
      {right}
      <History allClicks = {all}/>
    </div>
  )
}


export const Button = ({handleClick,text})=>{
  return <button onClick={handleClick}>{text}</button>
}

export const History = (props) => {
  // console.log(props);
  if(props.allClicks.length === 0){
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}