import { useState } from 'react'
import navBarPiru from "./Components/navBarPiru"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <navBarPiru />
    </>
  )
}

export default App
