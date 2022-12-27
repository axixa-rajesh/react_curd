import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './componets/Home';
import ProductCreate from './componets/ProductCreate';
import ProductCreatef from './componets/ProductCreatef';
import ProductListing  from './componets/ProductListing';
import ProductEdit from './componets/ProductEdit';
import ProductDelete from './componets/ProductDelete';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Form,
  useParams,
  Routes,
} from 'react-router-dom'
import PU from './componets/PU';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="success" variant="success">
        <Container>
          <Navbar.Brand href="#home">Products Management</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link}  to="/pcreate">Product Create</Nav.Link>
            <Nav.Link as={Link} to="/plist">Product List</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Routes>
           <Route path='/' element={<Home />} >
          </Route>
          <Route path='/pcreate' element={<ProductCreatef />} >
          </Route>
          <Route path='/plist' element={<ProductListing />} >
          </Route> 
          {/* <Route path='/pedit/:id' element={<ProductEdit id={id} /> }  > */}
          <Route path='/pedit/:id'  element={<PU />} >
          </Route>
          <Route path='/pdelete/:id' element={<ProductDelete />} >
        </Route>
      </Routes> 
      </Router>
    </div>
  );
}
export default App;
