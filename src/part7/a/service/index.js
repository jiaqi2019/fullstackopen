import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const respose = await axios.get(baseUrl)
  return respose.data
}

const createAnecdote = async (text) => {
  // console.log(text);
  const newobj = {
    text, 
    votes: 0,
  }
  const respose = await axios.post(baseUrl, newobj)
  return respose.data
}

const addVote = async (obj) => {
  obj.votes += 1
  const respose = await axios.put(baseUrl + "/" +  obj.id, obj)
  return respose.data
}


export default {
  getAll,
  createAnecdote,
  addVote
}





















