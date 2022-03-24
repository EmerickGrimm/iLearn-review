import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { AuthProvider } from "./contexts/AuthContext.js"
import Home from "./pages/Home.js"
import Create from './pages/Create.js'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Container, Nav, Navbar} from "react-bootstrap"


function App() {
  return (
    <Container>
      <div className="App">
        <Router>
          <AuthProvider>
            <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand href="/">Review Proj</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Главная</Nav.Link>
                  <Nav.Link href="/create">Создать пост</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/create' exact element={<Create />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/signup' exact element={<Signup />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App;
