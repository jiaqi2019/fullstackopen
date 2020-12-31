import {useEffect, useState } from 'react';
import axios from 'axios'


export const useCountry = (filter) => {
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((res)=>{
      setCountries(res.data)
    })
  }, [])

  return filter ? countries.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) : []
  
}

export const useField = (type) => {
  const [value, setValue] = useState('')
  const onChange = (event) => setValue(event.target.value)
  return {
    type, value, onChange
  }
}