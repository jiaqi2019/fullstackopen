const initState = ''

export default function filter(state = initState, action ){
  switch(action.type) {
    case 'FILTER':
      return action.data
  }
  return state
}

export function setFilter(key){
  return {
    type: "FILTER",
    data: key
  }
}