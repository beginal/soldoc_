import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './pages/Main';
import Confirm from './pages/Confirm';
const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/confirm" component={Confirm} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
