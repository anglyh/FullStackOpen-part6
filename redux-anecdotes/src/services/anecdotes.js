import axios from 'axios';

const baseUrl = 'http://localhost:3002/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateVote = async (id, anecdoteObject) => {
  const reponse = await axios.put(`${baseUrl}/${id}`, anecdoteObject)
  return reponse.data
}

export default {
  getAll,
  createNew,
  updateVote
}