import React, { useEffect, useState } from 'react';

import axios from 'axios'

export default function(){
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({
    name:'',
    number: ''
  })

  const [filter, setFilter] = useState('')
  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(res=>{
      setPersons(res.data)
    })
  }, [])
  function addPerson(e){
    e.preventDefault();
    setPersons(persons.concat(newPerson))
    setNewPerson({name:'',
    number: ''})
  }
  function changeName(e){
    setNewPerson({...newPerson, name: e.target.value})
  }
  function changeNumber(e){
    setNewPerson({...newPerson, number: e.target.value})
  }
  function filterChange(e){
    setFilter(e.target.value)
  }
  const personsToShow = filter ? persons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) : persons
  return (
    <div>
      <h1>Phonebook</h1>
      <p>filter showm with <input onChange={filterChange} value={filter}/></p>
      
      <h1>add a new</h1>
      <form onSubmit={addPerson}>
        name:<input value={newPerson.name} onChange={changeName}/> <br/>
        number:<input value={newPerson.number} onChange={changeNumber}/> <br/>
        <button>add</button>
      </form>

      <h1>Numbers</h1>
      {
        personsToShow.map(person => {
          return (
          <p>{person.name} {person.number}</p>
          )
        })
      }
    </div>
  )

}

