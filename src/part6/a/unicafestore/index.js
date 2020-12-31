import React, { useState } from 'react';
import store from './store'

import {goodAction, badAction, neutralAction} from './action'



export default function(){
  const [state, setState] = useState(store.getState()) 
  const {good, neutral, bad} = state
  store.subscribe(()=>{
    setState(store.getState())
  })

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>store.dispatch(goodAction())} text='goood'/>
      <Button handleClick={()=>store.dispatch(neutralAction())} text='neutral'/>
      <Button handleClick={()=>store.dispatch(badAction())} text='bad'/>
      <h2>statistics</h2>
      <Statistics {...{good, neutral, bad}}/>
    </div>
  )
}



const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = (props) => {
  const {good, neutral, bad} = props
  const arr = [good, neutral, bad]
  if(arr.every(item=>!item)){
    return <p>No feedback given</p>
  }
  const all = arr.reduce((a,b)=>a+b)
  const average = all / 3
  const positive = good / all * 100

  return (
    <table>
      <tbody>
        <Statistic text='good' value={good}/>
        <Statistic text='neutral' value={neutral}/>
        <Statistic text='bad' value={bad}/>
        <Statistic text='all' value={all}/>
        <Statistic text='average' value={average}/>
        <Statistic text='positive' value={positive + "%"}/>
      </tbody>
    </table>
  )
}

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}