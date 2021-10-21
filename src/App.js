import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TodosState from "./Context/todos/todosContext";

function App() {
  return (
    <>
    <TodosState>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
        </Switch>
      </Router>
    </TodosState>
    </>
  );
}

export default App;
