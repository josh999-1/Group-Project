import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Quiz from "./components/Quiz";
import Select from "./components/Select";
import Results from "./components/Results";
import Table from "./components/Table";
import Score from "./components/Score";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ScrollToTop>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/select" component={Select} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/table" component={Table} />
        <Route exact path="/score" component={Score} />
        <Redirect from="/register" to="/select" />
        </ScrollToTop>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
