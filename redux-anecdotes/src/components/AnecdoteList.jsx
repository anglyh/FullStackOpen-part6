import { useSelector, useDispatch } from 'react-redux';
import { updateVote } from '../reducers/anecdoteReducer';
import { setMessage } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    return anecdotes.filter(a => a.content.toLowerCase().trim().includes(filter))
  })

  const vote = (id) => {
    console.log('vote', id)
    const anecdoteToShow = anecdotes.find(a => a.id === id)

    const anecdoteChanged = { ...anecdoteToShow, votes: anecdoteToShow.votes + 1 }
    console.log('anecdote Voted', anecdoteChanged)

    dispatch(updateVote(id, anecdoteChanged))

    dispatch(setMessage(`You voted ${anecdoteChanged.content}`, 5))
    
  }
 
  const orderedAnecdotesByVotes = [...anecdotes].sort((a, b) =>
    // a.votes - b.votes  // Ascendente
    b.votes - a.votes
  )

  return (
    <div>
      {orderedAnecdotesByVotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
