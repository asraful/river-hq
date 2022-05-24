import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter
} from 'react-router-dom';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import axios from "axios";
import { Redirect } from 'react-router';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import AppHeader from '../common/AppHeader';
import LoadingIndicator from '../common/LoadingIndicator';
import { Layout, notification } from 'antd';
const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: true
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });    
  }

  loadCurrentUser() {
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

/* checked user logged in or not */
checkLoginStatus() {
    axios
    .get("http://localhost:3000/logged_in", { withCredentials: true })
    .then(response => {
      if (
        response.data.logged_in &&
        this.state.loggedInStatus === "NOT_LOGGED_IN"
      ) {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        });
      } else if (
        !response.data.logged_in &
        (this.state.loggedInStatus === "LOGGED_IN")
      ) {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
      }
    })
    .catch(error => {
      console.log("check login error", error);
    });
  }





  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: 'River-hq',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'River-hq',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

 
 
  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    
    return (
   
        <Layout className="app-container">
          <AppHeader isAuthenticated={this.state.isAuthenticated} 
            currentUser={this.state.currentUser} 
            onLogout={this.handleLogout} />

          <Content className="app-content">
             <div className="container">
               <switch>
               <Route path="/login" 
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                 <Route path="/signup" component={Signup}></Route>
                 <Route path="/users/:username" 
                  render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                </Route> 
                {/*  redirect to login page  */}
                <Route exact path="/login">
                  { <Redirect to="/login" /> }
               </Route>
               </switch>
            </div>
          </Content>
        </Layout>
    );
  }

}
 

export default withRouter(App);
