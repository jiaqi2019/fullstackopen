import React, { useEffect, useState } from 'react';
import {useField, useCountry} from './hooks'

export default function(){
  const filter = useField('text')
  const countrysToshow = useCountry(filter.value)
  const [info, setInfo] = useState(null)

  let showList = ''

  function showHandle(item){
    setInfo(item)
  }
  
  useEffect(()=>{
    if(countrysToshow.length == 1){
      setInfo(countrysToshow[0])
    }else{
      setInfo(null)
    }
  }, [countrysToshow.length])

  if(countrysToshow.length > 10){
    showList = 'Too many matches, spectify another filter' 
  }else if(countrysToshow.length > 1){
    showList = countrysToshow.map(item=>{
      return (
        <p key={item.name}>
          {item.name} <button onClick={()=>{showHandle(item)}}>show</button>
        </p>
      )
    })
  }

  return (
    <div>
      <p>find countries sw <input {...filter}/></p>
      {
        showList
      }
      <Country info={info}/>
    </div>
  )
}

const Country = function({info}){
  if(!info) return <></>
  return (
  <>
    <h1>{info.name}</h1>
    <span>capital {info.capital}</span><br/>
    <span>population {info.population}</span><br/>
    <h2>laguages</h2>
    <ul>
      {
        info.languages.map(item=>{
          return (
          <li key={item.name}>{item.name}</li>
          )
        })
      }
    </ul>
    <img src={info.flag} width='200px' height='200px'/>
  </>
  )
}

















