// App.js

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

function App() {
  // Mock user authentication
  localStorage.setItem('loggedIn', true);

  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route exact path="/users">
                <UserList />
              </Route>
              <Route path="/users/:id">
                <UserForm />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
