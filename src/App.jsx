import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Main } from './components/Layouts/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
      <div className='absolute z-[-1] bottom-0 top-0 min-h-screen w-full bg-[#141414] '>
        <Main />
      </div>
    </div>
  )
}

export default App
