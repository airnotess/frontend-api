import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Profile from './components/Profile'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Signin/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
