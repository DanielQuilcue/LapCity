import { Route, Switch } from "wouter";

import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/registro" component={Register} />
    </Switch>
  );
}

export default App;
