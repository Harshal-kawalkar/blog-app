import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={BlogPostList} />
          <Route path="/post/:id" component={BlogPostDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
