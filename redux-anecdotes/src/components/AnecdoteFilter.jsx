import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const AnecdoteFilter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    console.log(event.target.value)
    const filter = event.target.value.toLowerCase().trim()

    dispatch(filterChange(filter))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input type="text" onChange={handleChange} />
    </div>
  )
}

export default AnecdoteFilter