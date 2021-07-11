import './App.css';
import Home from './Home';
import Admin from './Admin';
import Cart from './Cart';
import {HashRouter as Router,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <nav id="header">
      
        </nav>
        <span id="grid-d"></span>
        <span id="grid-c"></span>

<img alt='head' src="https://raw.githubusercontent.com/sadman-sakib-abesh/images/main/header.jpg" id="header-img" width="100%" height='100%' />
<div id="header-2">

  {sessionStorage.getItem('cart')?<span id='confirm'>&nbsp;&nbsp;{JSON.parse(sessionStorage.getItem('cart')).length}&nbsp;&nbsp;</span>:<></>}
     <Link to='/Cart' id='cart' class="glyphicon glyphicon-shopping-cart"></Link>&nbsp;&nbsp;
      </div>

      <br />
      <br/>
      <div>
      
<Route exact path='/'  component={Home}/>
<Route path='/MyAdmin-14639'  component={Admin}/>
<Route path='/Cart'  component={Cart}/>





      
</div>

<footer className='footer'>
  <center> sadmansakibabesh@gmail.com</center>
</footer>
</Router>
      </div>
  );
}

export default App;
