import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          {routes.map((it) => {
            return (
              <Route
                key={it.path}
                exact
                path={it.path}
                component={it.component}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}
export default App;
