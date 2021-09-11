import "./App.css";
import HomePage from "./Components/Homepage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerDetails from "./Components/Player Details/PlayerDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/playerdetails/:id" component={PlayerDetails}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
