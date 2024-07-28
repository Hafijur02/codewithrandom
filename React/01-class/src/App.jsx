import React, { useState } from 'react'

const App = () => {
  let [name, setName] = useState('Hafijur Rahman')
  return (
    <div>
      Hello : {name}
    </div>
  )
}

export default App