import React, { useState, useEffect } from 'react';

import axios from 'axios'

export default function(props){
  const [newNote, setNewNote] = useState('')
  const [notes, setNotes] = useState(props.notes)
  const [showAll, setShowAll] = useState(true)
  
  useEffect(()=>{
    axios.get('http://localhost:3001/notes').then(res=>{
      setNotes(res.data)
    })
  }, [])

  function handleChange(e){
    setNewNote(e.target.value)
  }
  function addNote(e){
    e.preventDefault();
    const note = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(note))
    setNewNote('')
  }
  function showAllHandle(){
    setShowAll(!showAll)
  }
  
  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notesToShow.map(note=>{
            return (
              <li key={note.id}>{note.content}</li>
            )   
          })
        }
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange}/>
        <button type='submit'>save</button>
      </form>
      <button onClick={showAllHandle}>showAll</button>
    </div>
  )
}



















