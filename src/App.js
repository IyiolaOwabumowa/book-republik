import Header from "./components/Header/Header";
import "./App.css";
import "./components/Header/Header.css";
import Landing from "./components/Auth/Landing";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const token = null;
  return (
    <Router>
      {token == null ? (
        <Route path="/" exact component={Landing} />
      ) : (
        <>
          <Header />
          <Route path="/dashboard" component={Dashboard} />
        </>
      )}
    </Router>
  );
}

export default App;
