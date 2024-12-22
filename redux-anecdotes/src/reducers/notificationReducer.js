import { createSlice, current } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setNotification(state, action) {
      return action.payload
    }

  }
})

export const { setNotification } = notificationSlice.actions

export const setMessage = (message, seconds) => {
  return dispatch => {
    dispatch(setNotification(message))

    setTimeout(() => dispatch(setNotification('')), seconds * 1000);
  }
}

export default notificationSlice.reducer