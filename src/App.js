
import './App.css';
import Meme from './Meme';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemeGenerated from './MemeGenerated';

function App() {
  return (
    <Router>
      <Switch>

    <div className="App">
      <Navbar />
        <Route exact path='/'>
      <Meme />
      </Route>
      <Route path='/generate'>
        <MemeGenerated />
      </Route>
      
    </div>
    </Switch>
    </Router>
  );
}

export default App;
