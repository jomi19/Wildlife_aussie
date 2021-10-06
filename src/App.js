import { BrowserRouter as Router,
      Route } from "react-router-dom";
import {useState, useEffect} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/main.scss"

import Header from "./view/header/Header.js";
import StartPage from "./view/StartPage.js"
import Gallery from "./view/pages/gallery";
import ViewDog from "./view/pages/viewDog.js";
import Footer from "./view/footer/Footer.js";
import axios from "axios";
import {API_URL} from "./config.json";
import NewBlogg from "./view/blogg/New";
import Admin from "./view/admin/admin.js";
import LogIn from "./view/admin/login.js";

function App() {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    axios.get(`${API_URL}website/menu`)
    .then(respons => {
        setSettings(respons.data.menu)
    })
    .catch(error =>  {
        console.log(error)
    })
}, [])
  return (
    <Router>
    <div className="wrap-all">
      <Header settings={settings}/>
      <main className="outer-main">
        <Route exact path="/"><StartPage /></Route>
        <Route exact path="/images"><Gallery /></Route>
        <Route path="/dogs/:id" component={ViewDog}/>
        <Route exact path="/blogg/new" component={NewBlogg}/>
        <Route path = "/admin/"><Admin /> </Route>
        <Route exact path = "/login" component={LogIn} /> 
      </main>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
