import ReactDOM from 'react-dom/client'
//import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

// const reducer = combineReducers({
//   filter: filterReducer,
//   anecdotes: anecdoteReducer
// })

store.subscribe(() => console.log(store.getState()))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
    <App />
  </Provider>
)