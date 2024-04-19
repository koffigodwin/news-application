import React, { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Newspage from './components/Newspage'

function App() {
  
  const [category,setcategory] = useState('');

  return (
    <div>
     <Navbar setcategory={setcategory} />
     <Newspage category={category}/>
    </div>
  )
}

export default App
