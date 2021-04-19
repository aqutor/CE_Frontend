import React, { Component } from 'react';
import './App.css';
import Login from './Container/Login/Login';
import About from './Container/Portal/Me/About/About'
import Portal from './Container/Portal/Portal'
import Footer from './Component/Footer/Footer';
import Profile from './Container/Portal/Me/Profile/Profile';
import Resource from './Container/Portal/Resource/Resource'
import Practice from './Container/Portal/Evaluate/Page/Page';
import Register from './Container/Register/Register';

import Forget from './Container/Forget/Forget';
import History from './Container/Portal/Me/History/History';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Me from './Container/Portal/Me/Me';

class App extends Component{
  state = {
    userinfo: null,
  }

  userCallback = (user) => {
    this.setState({
      userinfo: user,
    })
  }

  
  
  render(){
    return(
      <BrowserRouter>
        <div className="App">
        <nav>
          
        </nav>
        <main>
          <Switch>
            <Route path='/' exact component = {() => <Login callback = {this.userCallback}  />} />
            <Route path='/Portal' exact component = {() => <Portal />} />
            <Route path='/Portal/Me' exact component = {() => <Me />} />
            <Route path='/Me/Profile' exact component = {() => <Profile />} />
            <Route path='/Me/About' exact component = {() => <About />} />
            <Route path='/Me/History' exact component = {() => <History />} />
            <Route path='/Forget' exact component = {() => <Forget />} />
            <Route path='/Resource' exact component={() => <Resource />} />
            <Route path='/Practice' exact component={() => <Practice />} />
            <Route path='/Register' exact component={() => <Register />} />
          
          </Switch>
        </main>
      <Footer />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
