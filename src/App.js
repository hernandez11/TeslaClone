import './App.css';
import {  BrowserRouter as Router, Switch,  Route } from "react-router-dom";
import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import Model3 from './Pages/Model3.js';
import ModelS from './Pages/ModelS.js';
import ModelX from './Pages/ModelX.js';
import ModelY from './Pages/ModelY.js';
import SolarPanels from './Pages/SolarPanels.js';
import SolarRoof from './Pages/SolarRoof.js';

function App() {
  return (
    <div className="app">

      <Router>
        <Navbar />

        <Switch>
          <Route exact path='/'> <Home /> </Route>
          <Route exact path='/ModelS'> <ModelS /> </Route>
          <Route exact path='/Model3'> <Model3 /> </Route>
          <Route exact path='/ModelX'> <ModelX /> </Route>
          <Route exact path='/ModelY'> <ModelY /> </Route>
          <Route exact path='/SolarPanels'> <SolarPanels /> </Route>
          <Route exact path='/SolarRoof'> <SolarRoof /> </Route>
        </Switch>

        {/* <Footer /> */}
      </Router>
  
    </div>
  );
}

export default App;
