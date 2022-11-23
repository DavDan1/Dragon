import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home-page";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact patch='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
