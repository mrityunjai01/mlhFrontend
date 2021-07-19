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
            path="/courses/add"
          >
            <AddCourse/>
          </Route>  
          <Route
            path="/courses/edit/:id">
            <EditCourse/>
          </Route>
          <Route
            path="/courses/:id"
          >
            <SingleCourse/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/courses">
            <CourseList />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
