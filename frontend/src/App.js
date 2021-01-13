import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register'
import Users from './components/Users'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
