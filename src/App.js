import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/navbar.component'
import NotesList from './components/notes-list.component'
import EditNote from './components/edit-note.component'
import CreateNote from './components/create-note.component'
import CreateUser from './components/create-user.component'

function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path='/' exact component={NotesList} />
      <Route path='/edit/:id' component={EditNote} />
      <Route path='/create' component={CreateNote} />
      <Route path='/user' component={CreateUser} />
    </Router>
  );
}

export default App;
