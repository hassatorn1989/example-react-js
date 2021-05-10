// import logo from './logo.svg';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <DefaultLayout exact path="/home" component={Home} />
          <DefaultLayout exact path="/about" component={About} />
          <DefaultLayout exact path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return <Link to="home">Lggin</Link>;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
