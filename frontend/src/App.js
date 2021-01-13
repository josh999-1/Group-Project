import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Users from "./components/Users";
import Select from "./components/Select";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/select" component={Select} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
