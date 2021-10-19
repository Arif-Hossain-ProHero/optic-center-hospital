import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Footer from "./pages/Home/Footer/Footer";
import Home from "./pages/Home/Home/Home";
import NavBar from "./pages/Home/NavBar/NavBar";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Test from "./pages/Test/Test";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/service-detail/:serviceId">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="/test">
            <Test></Test>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
