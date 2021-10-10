import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
// import Header from './components/header/header.styles.scss';

function App ()
{
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ HomePage }></Route>
        <Route path="/shop" component={ ShopPage }></Route>
      </Switch>
    </div>
  );
}

export default App;
