import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link} from "react-router-dom";
import Users from './Users';
import Posts from './Posts';
import Comments from './Comments';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" render={()=>{ return (
        <div className="list">
            <Link to='/Users'><button type="button" class="btn btn-dark">Users List</button></Link>
        </div>)}}/>

          
          <Route path="/Users" component={Users}/>
          <Route path="/Posts/:userId" component={Posts}/>
          <Route path="/Comments/:postId" component={Comments}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
