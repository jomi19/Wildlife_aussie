import { BrowserRouter as Router,
      Route } from "react-router-dom";
import "./style/main.scss"
import Header from "./view/header/Header.js";
import StartPage from "./view/StartPage.js"
import Gallery from "./view/pages/gallery";
import ViewDog from "./view/pages/viewDog.js";

function App() {
  return (
    <Router>
    <div className="wrap-all">
      <Header />
      <main className="outer-main">
        <Route exact path="/"><StartPage /></Route>
        <Route exact path="/images"><Gallery /></Route>
        <Route path="/dogs/:id" component={ViewDog}/>
      </main>
      <footer className="outer-footer">tes</footer>
    </div>
    </Router>
  );
}

export default App;
