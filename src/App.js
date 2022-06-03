import { Switch } from "react-router-dom";
// import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function App() {
  // const state = useSelector(State => console.log(State))
  return <div className="App">
   <div className="row" >
 
  <Switch>
    <Route path='/' exact>
  <center><FirstPage /></center>
    </Route>
    <Route path='/2' exact>
 <center> <SecondPage /></center>
    </Route>
    <Route path='/3' exact>
 <center> <ThirdPage /></center>
    </Route>
    <Route path='/dashboard' exact>
 <center> <Dashboard /></center>
    </Route>
    <Route path='*'>
<center> <h1>404 Not Found</h1></center>
    </Route>
  </Switch>
     </div>
  </div>;
}

export default App;
