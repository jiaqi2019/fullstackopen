import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function(){
  const [all, setAll] = useState([])
  const [filter, setFilter] = useState('')
  const [info, setInfo] = useState(null)
  const [countrysToshow, setCountrysToshow] = useState([])
  let showList = ''

  function fliterChange(e){
    setFilter(e.target.value)
  }
  function showHandle(item){
    setInfo(item)
  }

  useEffect(()=>{
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((res)=>{
      setAll(res.data)
    })
  }, [])
  useEffect(()=>{
    filter && setCountrysToshow(all.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())))
  }, [filter])
 
  
  useEffect(()=>{
    if(countrysToshow.length == 1){
      setInfo(countrysToshow[0])
    }
  }, [countrysToshow])
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
      <p>find countries sw <input value={filter} onChange={fliterChange}/></p>
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

















