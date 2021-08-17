
import Category from './pages/category/Category';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Categories from './pages/categories/Categories';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
   
        <Switch>
            <Route exact path="/">
              <Home />
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
