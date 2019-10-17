import React, { Component } from 'react';
import './css/main.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Events from './components/Events';
import Jobs from './components/Jobs';
import Contact from './components/Contact';
import Recruiters from './components/Recruiters';
import Profile from './components/Profile';
// import ViewBlog from './components/ViewBlog';



const Error = () => (<div style={{paddingTop: '100px'}}><strong>Error 404 : Get a better keyboard. This URL doesn't exist.</strong></div>);


export default class App extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(          
      <BrowserRouter>
        <> 
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/signup' exact  component={Signup} />
            <Route path='/events' exact component={Events} />
            <Route path='/jobs' exact component={Jobs} />
            <Route path='/recruiters' exact component={Recruiters} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/contact' exact  component={Contact} />
            <Route component={Error} />
          </Switch>
        </>          
      </BrowserRouter>
    
    )
  }
};
