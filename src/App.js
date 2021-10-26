
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavBar from './components/NavBar';

import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import ErrorPage from './screens/ErrorPage';

import ProfilePage from './screens/ProfilePage';
import CategoriesPage from './screens/CategoriesPage';

import Api from './screens/Api';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/api" component={Api}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        {/* ruta variable */}
        <Route exact path="/profile/:username" component={ProfilePage}/>

        <Route exact path="/categories" component={CategoriesPage}/>
        
        <Route path="/" component={Home} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
