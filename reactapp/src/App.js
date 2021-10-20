import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import isAuthenticated from './Helper/isAuthenticated';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Pages/profile';
import AdminHome from './admin/home';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <Router>
          <Switch>
                <Route
                      exact
                      path="/"
                      render={() => {
                          return (
                            !isAuthenticated() ?
                            <Redirect to="/home" /> :
                            <Redirect to="/signin" /> 
                          )
                      }}
                    />
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/signin" exact component={SignIn}></Route>
            <ProtectedRoutes path="/admin" exact component={AdminHome}/>
            <ProtectedRoutes path="/home" exact component={Home}/>
            <ProtectedRoutes path="/profile" exact component={Profile}/>
          </Switch>
        </Router>
  );
}

export default App;