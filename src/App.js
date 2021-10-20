import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Contact from "./pages/Contact/Contact";
import Footer from "./pages/Home/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import NavBar from "./pages/Home/NavBar/NavBar";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/PrivateRoute/PrivateRoute";
import Registration from "./pages/Registration/Registration";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import NotFound from "./pages/NotFound/NotFound";
import Test from "./pages/Test/Test";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/service-detail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
