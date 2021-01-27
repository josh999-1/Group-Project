import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Select from "./components/Select";
import Results from "./components/Results";
import Table from "./components/Table";
import Leaderboard from "./components/Leaderboard";
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/select" component={Select} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/leaderboard" component={Leaderboard} />
        <ScrollToTop>
          <Route exact path="/table" component={Table} />
        </ScrollToTop>      
        <Redirect from="/register" to="/select" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
