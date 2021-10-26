import logo from './logo.svg';
import './App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import {Articles} from "./components/Articles";
import {SingleArticle} from "./components/SingleArticle";
import {AddArticle} from "./components/AddArticle";

function App() {
  return (
    <BrowserRouter>
        <nav className="nav justify-content-center">
            <NavLink className="nav-link" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
        <Route exact path="/">
          <Articles/>
        </Route>
        <Route path="/contact-us">
          <h1>Страница с контактами</h1>
        </Route>
        <Route path="/blog/">
            <SingleArticle/>
        </Route>
        <Route path="/addArticle">
            <AddArticle/>
        </Route>
    </BrowserRouter>
  );
}

export default App;
