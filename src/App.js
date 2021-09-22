import {BrowserRouter, Route, Switch}from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import HoursBar from "./components/HoursBar";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
    <NavigationBar/>
    <HoursBar/>
      <Switch >
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/service" component={ServicePage}/>
        <Route exact path="/about" component={AboutUsPage}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
