import React from 'react';
import './App.css';
import { HashRouter,Route } from 'react-router-dom';

import Header from './copmonents/Header';
import  Home  from "./copmonents/Home"
import Publication from './copmonents/Publication'
import ContactsPage from './copmonents/ContactsPage'
import ContactPage from './copmonents/ContactPage'
import Fotos from './copmonents/Fotos'


function App() {
  return (
    <div className="App">
      <Header/>
      <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/fotos"  component={Fotos} />
        <Route path="/publication" component={Publication} />
        <Route path="/contactsPage"  component={ContactsPage} />
        <Route path="/contactPage/:id"  component={ContactPage} />
     </HashRouter>
    </div>
  );
}

export default App;
