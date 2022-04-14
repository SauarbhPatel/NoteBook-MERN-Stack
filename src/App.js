import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Notes from "./components/Notes";
import Alert from "./components/Alert";
import { useState ,useEffect,useContext} from "react";
import NoteState from "./context/notes/NoteState";
import AboutUs from "./components/AboutUs";
import ErrorPage from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";
const App = () => {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3500);
  };

  return (
    <>
      <LoadingPage />
      <NoteState>
        <Router>
          <NavBar />
          <Alert alerT={alert} />
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/aboutUs">
              <AboutUs />
            </Route>
            <Route exact path="/about">
              <About showAlert={showAlert} />
            </Route>
            <Route exact path="/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/notes">
              <Notes showAlert={showAlert} />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
      </NoteState>
    </>
  );
};

export default App;
