import service from '../service'

const initState =[
  // {
  //   text: 'If it hurts, do it more often',
  //   votes: 0
  // },
  // {
  //   text:'Adding manpower to a late software project makes it later!',
  //   votes: 0
  // },
  // {
  //   text:'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  //   votes: 0
  // },
  // {
  //   text:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  //   votes: 0
  // },
  // {
  //   text:'Premature optimization is the root of all evil.',
  //   votes: 0
  // },
  // {
  //   text:'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  //   votes: 0
  // }
]


export default function reducer(state=initState, action){
  switch(action.type){
    case 'VOTE':
      const newState = state.map(item => item.id == action.data.id ? action.data : item)
      
      newState.sort((a,b) => b.votes - a.votes) 
      return newState
    case 'CREATE':
      return state.concat(action.data)
    case 'INITANECDOTE':
      return action.data
  }
  return state
}

export function addVote(obj){
  return async dispatch => {
    const newobj = await service.addVote(obj)
    dispatch({
      type: 'VOTE',
      data: newobj,
    })
  }
}

export function addAnecdote(text){
  return async dispatch => {
    const newObj = await service.createAnecdote(text)
    dispatch({
      type: 'CREATE',
      data: newObj
    })
  }
}

export function initAnecdotes(){
  return async dispatch => {
    const list = await service.getAll()
    dispatch({
      type:'INITANECDOTE',
      data: list
    })
  }
}