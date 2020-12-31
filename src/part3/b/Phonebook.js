import React, { useEffect, useState } from 'react';
import PersonService from './service'
import './phone.css'

export default function(){
  const [persons, setPersons] = useState([])
  const [newPerson, setNewPerson] = useState({
    name:'',
    number: ''
  })
  const [mess, setMess] = useState('')
  const [filter, setFilter] = useState('')
  useEffect(()=>{
    PersonService
    .getAll()
    .then(data=>{
      setPersons(data || [])
    })
  }, [])
  function addPerson(e){
    e.preventDefault();
    const index = persons.findIndex(item=>item.name==newPerson.name) 
    if(index !== -1){
      PersonService
      .updatePerson(persons[index].id, newPerson)
      .then(person=>{
        setPersons(persons.map(p=>p.id !== person.id ? p : person))
        setNewPerson({name:'',
        number: ''})
      }).catch(error => {
        setMess(error.response.data.error)
        setTimeout(()=>{
          setMess('')
        }, 3000)
      })
      
      return
    }
    PersonService
    .addPerson(newPerson)
    .then(data=>{   
      setPersons(persons.concat(data))
      setNewPerson({name:'',
      number: ''})
    })
    .catch(error => {
      setMess(error.response.data.error)
      setTimeout(()=>{ 
        setMess('') 
      }, 3000)
    })
  }
  function deletePerson(id){
    PersonService
    .deletePerson(id)
    .then(res=>{
      setPersons(persons.filter(item=> item.id != id))
    })
    .catch(err =>{
      setMess(err.response.data.error)
      setPersons(persons.filter(item=> item.id != id))
      setTimeout(()=>{
        setMess('')
      }, 3000)
    })
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
  const personsToShow = filter ? persons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase())) : persons || []
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification mess={mess} />
      <p>filter showm with <input onChange={filterChange} value={filter}/></p>
      
      <h1>add a new</h1>
      <form onSubmit={addPerson}>
        name:<input value={newPerson.name} onChange={changeName}/> <br/>
        number:<input value={newPerson.number} onChange={changeNumber}/> <br/>
        <button>add</button>
      </form>

      <h1>Numbers</h1>
      {
        personsToShow.map((person) => {
          return (
          <p key={person.id}>{person.name} {person.number} <button onClick={()=>{deletePerson(person.id)}}>dele</button></p>
          )
        })
      }
    </div>
  )
}

const Notification = function({mess}){
  if(!mess) return null
  return (
    <div className='error'>
      {mess}
    </div>
  )
}