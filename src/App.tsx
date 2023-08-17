
import './App.css'

function App() {
 

  return (
    <div>
      <h1 className='bg-lime-200 text-center text-2xl font-bold py-4'>This is Tech Net Projects</h1>
      <div className='flex gap-6 justify-center my-8'>
          <button className='border-2 border-green-500 rounded-md px-2 py-3'>
            Increment
          </button>
          <div>0</div>
          <button className='border-2 border-red-500 rounded-md px-2 py-3'>Decrement</button>
      </div>
    </div>
  )
}

export default App
