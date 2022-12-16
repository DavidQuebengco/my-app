import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Footer from './footer';




function App() {
   
  
   return(
      <Router>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;