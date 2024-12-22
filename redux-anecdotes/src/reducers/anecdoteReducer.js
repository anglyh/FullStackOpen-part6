import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload.id
      const anecdoteToChange = state.find(a => a.id === id)
      const anecdoteChanged = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1,
      }
      return state.map(a =>
        a.id === id ? anecdoteChanged : a
      )
    },

    setAnecdotes(state, action) { 
      return action.payload
    },

    appendAnecdote(state, action) {
      state.push(action.payload)
    },
  }
})

export const { voteAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const updateVote = (id, data) => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateVote(id, data)
    dispatch(voteAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer

// const anecdoteReducer = (state = initialState, action) => {
//   // console.log('state now: ', state)
//   // console.log('action', action)

//   switch (action.type) {
//     case 'VOTE':
//       const id = action.payload.id
//       const anecdoteToChange = state.find(b => b.id === id)
//       const anecdoteChanged = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1
//       }
//       return state.map(b => b.id === id ? anecdoteChanged : b)

//     case 'ADD_ANECDOTE':
//       return [...state, action.payload]

//     default:
//       return state
//   }
// }     

// export const voteAnecdote = (id) => {
//   return {
//     type: 'VOTE',
//     payload: { id }
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'ADD_ANECDOTE',
//     payload: {
//       content,
//       id: getId(),
//       votes: 0
//     }
//   }
// }

// export default anecdoteReducer