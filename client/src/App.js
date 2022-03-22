import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from "./pages/Home.js"
import Create from './pages/Create.js'
import { Container } from "react-bootstrap"


function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <Link to='/create'>Create A post</Link>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/create' exact element={<Create/>} />

          </Routes>
        </Router>
      </div>
    </Container>
  )
}

export default App;
