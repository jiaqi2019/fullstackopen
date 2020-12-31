import { useState } from "react"



export const useField = (type) => {
  console.log('执行hook');
  const [value, setValue] = useState('')
  const onChange = (event) => {
    setValue(event.target.value)
    console.log('set');
  }
  const reset = () => setValue('')
  const obj = {
    value,
    type,
    onChange,
  }
  Object.defineProperty(obj, 'reset', {
    value: reset,
    enumerable: false
  })
  return obj
}






















