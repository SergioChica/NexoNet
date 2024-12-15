import { useState } from 'react'
import { Main } from './components/Layouts/Main/Main'
import { Header } from './components/Layouts/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
      <div className='absolute z-[-1] bottom-0 top-0 min-h-screen w-full bg-[#141414] '></div>
      <Header />
      <Main />
    </div>
  )
}

export default App
