
const initState = {
  good: 0, neutral: 0, bad:0
}


const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'GOOD': 
      return {...state, good: state.good + 1} 
    case 'OK':
      return {...state, neutral: state.neutral + 1}
    case 'BAD':
      return {...state, bad: state.bad + 1}
    case 'ZERO':
      return state
  }
  return state
}

export default reducer














