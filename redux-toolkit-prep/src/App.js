import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseAmount, increment } from './redux/slices/counterSlices'

function App () {
  const dispatch = useDispatch()
  const counter = useSelector(state => state?.counter)
  return (
    <div className='App'>
        <h1>Counter : <span>{counter?.value}</span></h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increaseAmount(10))}>Increase Amount</button>
    </div>
  )
}

export default App
