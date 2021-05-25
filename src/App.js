import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Components/Login'
import EmployeeData from './Components/EmployeeData'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/employeeDetails" component={EmployeeData} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
