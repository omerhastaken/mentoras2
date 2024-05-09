import './App.css';
import { Home } from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Plans } from './components/Plans';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/plans">
            <Plans />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
