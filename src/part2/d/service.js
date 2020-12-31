import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

function getAll(){
  return axios
  .get(baseUrl)
  .then(res=> res.data)
  .catch(err=>{
    console.log(err);
  })
}

function updatePerson(id, newPerson){
  return axios
  .put(baseUrl+'/'+id, newPerson)
  .then(res=>res.data)
}

function deletePerson(id){
  return axios
  .delete(baseUrl+'/'+id)
  .then(res=>res.data)
}

function addPerson(newPerson){
  return axios
  .post(baseUrl, newPerson)
  .then(res=>res.data)
  .catch(err=>{
    console.log(err);
  })
}

export default {
  getAll,
  updatePerson,
  addPerson,
  deletePerson
}