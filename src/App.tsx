import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router"
import HomePage from './pages/HomePage'

function App() {

  return (
    <Router basename='/cent18/'>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
