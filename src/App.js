import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Create from "./components/create";
import Edit from './components/edit';
import CourseList from "./components/courseList";

import Home from './components/home';
import Signup from './components/signUp';
import Login from './components/login';
import SingleCourse from './components/singleCourse';
import AddCourse from './components/addCourse';
import EditCourse from './components/editCourse';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  return (
    <Provider store = {store}>

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/article/add"
            component={AddCourse} />
          <Route
            path="/article/edit/:id"
            component={EditCourse} />
          <Route
            path="/articles/:id"
            component={SingleCourse} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
          <Route path="/courses">
            <CourseList />
          </Route>
          <Route path="/courses/edit/:id" component={Edit} />
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
