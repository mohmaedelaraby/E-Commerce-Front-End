
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductsList from './pages/ProductsList';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import {BrowserRouter as Router ,Switch ,Route, Redirect} from 'react-router-dom'
import { useSelector} from 'react-redux'


function App() {
  const user = useSelector((state) => state.user.currentUser);
  
  return (

  <Router>
    <Switch>
      <Route exact path="/"> <Home/></Route>
      <Route path="/products/:category" > <ProductsList/></Route>
      <Route path="/product/:id" > <SingleProduct/></Route>
      <Route path="/cart" > <Cart/></Route>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
    </Switch>
  </Router>


  );
}

export default App;
