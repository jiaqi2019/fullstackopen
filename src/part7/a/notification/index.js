import React from 'react';

export default function({mess}) {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: '',
  }
 
  if(!mess ) return null
  return (
    <div style={style}>
      {mess}
    </div>
  )
}