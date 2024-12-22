import { useSelector } from 'react-redux'

const Notification = () => {
  console.log('Notification component log')
  const notification = useSelector(({ notification }) => notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  if (!notification) return null

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification