import TopBar from './components/topbar/TopBar';
import Category from './pages/category/Category';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Categories from './pages/categories/Categories';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App(props) {
  return (
    <Router>
    <div className="App">
   
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/category/:id">
              <Category />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path='/detail/:id'>
              <Detail />
            </Route>
          </Switch>
       
    
    </div>
    </Router>
  );
}

export default App;
