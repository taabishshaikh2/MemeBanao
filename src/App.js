
import './App.css';
import Meme from './Meme';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MemeGenerated from './MemeGenerated';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path='/'>
          <Meme />
          </Route>
          <Route path='/generate'>
            <MemeGenerated />
          </Route>
          </Switch>
      </div>
    </div>
</Router>
  );
}

export default App;
