import React, {useEffect} from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { fetchPost } from './redux/slices/counterSlices'

function App () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPost())
  }, [])
  const post = useSelector(state => state.post)
  const { loading, postsList } = post
  console.log({loading, postsList})
  return (
    <div className='App'>
      <h1>Posts List</h1>
      
      {loading ? <span>Loading ------ </span> : postsList.map((data, index)=>{
        return <li key={index}>{data.title}</li>
      })}
    </div>
  )
}

export default App
