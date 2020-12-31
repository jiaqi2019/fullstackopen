import React, {useState} from 'react';


export default function(){
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text='goood'/>
      <Button handleClick={()=>setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={()=>setBad(bad+1)} text='bad'/>
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