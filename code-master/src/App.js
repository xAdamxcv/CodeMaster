import Home from './components/Home/home';
import SimpleSteps from './components/SimpleSteps/SimpleStep';
import AboutUs from './components/AboutUs/AboutUs';
import './scss/main.scss';
import WhoWeHelp from './components/WhoWeHelp/WhoWeHelp';
import Contact from './components/Contact/Contact';
import React, {useState} from "react"
import Log from './components/Log/Log';
import Main from './components/Main/Main';
import {
  HashRouter,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';


let App = () => {
  //const [state, setState] = useState([]);

  
  return(


    <HashRouter>
             <>
               <Route exact path='/' component={Main} />
               <Route path='/Log/Log.js' component={Log} />
             </>
           </HashRouter>
  )

}

export default App;
