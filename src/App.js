
import './App.css';
import Meme from './Meme';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MemeGenerated from './MemeGenerated';

function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar />
    <Switch>
      
        <Route exact path='/'>
      <Meme />
      </Route>
      <Route path='/generate'>
        <MemeGenerated />
      </Route>
      </Switch>
      
    </div>
</Router>
  );
}

export default App;
