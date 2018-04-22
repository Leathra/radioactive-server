//reposible for componant view
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Designs from './Designs';
import Footer from './Footer';
import DesignsPrimary from './DesignsPrimary';
import DesignsYoungMen from './DesignsYoungMen';
import DesignsYoungWomen from './DesignsYoungWomen';
import DesignsReliefSociety from './DesignsReliefSociety';
import Tutorials from './Tutorials';
import ShoppingCart from './ShoppingCart';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const SignUp = () => <h2>Sign Up</h2>;
const SearchBar = () => <h2>Search</h2>;


class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/signUp" component={SignUp} />
            <Route exact path="/Designs" component={Designs} />
            <Route path="/designsprimary" component={DesignsPrimary} />
            <Route path="/designsyoungmen" component={DesignsYoungMen} />
            <Route path="/designsyoungwomen" component={DesignsYoungWomen} />
            <Route path="/designsreliefsociety" component={DesignsReliefSociety} />
            <Route path="/tutorials" component={Tutorials} />
            <Route path="/shoppingCart" component={ShoppingCart} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
