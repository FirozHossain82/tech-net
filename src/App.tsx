
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { RootState } from './redux/store'

function App() {
 
  const {count }= useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='bg-lime-200 text-center text-2xl font-bold py-4'>This is Tech Net Projects</h1>
      <div className='flex gap-6 justify-center my-8'>
          <button className='border-2 border-green-500 rounded-md px-2 py-3'>
            Increment
          </button>
          <div>{count}</div>
          <button className='border-2 border-red-500 rounded-md px-2 py-3'>Decrement</button>
      </div>
    </div>
  )
}

export default App
