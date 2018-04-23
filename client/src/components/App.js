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
import DesignsActivityDays from './DesignsActivityDays';
import DesignsCubScouts from './DesignsCubScouts';
import DesignsPrimarySpecialEvents from './DesignsPrimarySpecialEvents';
import DesignsPrimarySundays from './DesignsPrimarySundays';
import DesignsYoungMen from './DesignsYoungMen';
import DesignsScoutsDutyToGod from './DesignsScoutsDutyToGod';
import DesignsYMMinistering from './DesignsYMMinistering';
import DesignsYMSpecialEvents from './DesignsYMSpecialEvents';
import DesignsYMSundays from './DesignsYMSundays';
import DesignsYoungWomen from './DesignsYoungWomen';
import DesignsGirlsCamp from './DesignsGirlsCamp';
import DesignsPersonalProgress from './DesignsPersonalProgress';
import DesignsYWSpecialEvents from './DesignsYWSpecialEvents';
import DesignsYWSundays from './DesignsYWSundays';
import DesignsReliefSociety from './DesignsReliefSociety';
import DesignsEnrichmentActivities from './DesignsEnrichmentActivities';
import DesignsMinistering from './DesignsMinistering';
import DesignsReliefSocietySpecialEvents from './DesignsReliefSocietySpecialEvents';
import DesignsReliefSocietySundays from './DesignsReliefSocietySundays';
import Tutorials from './Tutorials';
import ProductPage from './ProductPage';
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
            <Route path="/designsprimaryspecialevents" component={DesignsPrimarySpecialEvents} />
            <Route path="/designsprimarysundays" component={DesignsPrimarySundays} />
            <Route path="/designsactivitydays" component={DesignsActivityDays} />
            <Route path="/designscubscouts" component={DesignsCubScouts} />
            <Route path="/designsyoungmen" component={DesignsYoungMen} />
            <Route path="/designsscoutsdutytogod" component={DesignsScoutsDutyToGod} />
            <Route path="/designsymministering" component={DesignsYMMinistering} />
            <Route path="/designsymspecialevents" component={DesignsYMSpecialEvents} />
            <Route path="/designsymsundays" component={DesignsYMSundays} />
            <Route path="/designsyoungwomen" component={DesignsYoungWomen} />
            <Route path="/designspersonalprogress" component={DesignsPersonalProgress} />
            <Route path="/designsgirlscamp" component={DesignsGirlsCamp} />
            <Route path="/designsywspecialevents" component={DesignsYWSpecialEvents} />
            <Route path="/designsywsundays" component={DesignsYWSundays} />
            <Route path="/designsreliefsociety" component={DesignsReliefSociety} />
            <Route path="/designsenrichmentactivities" component={DesignsEnrichmentActivities} />
            <Route path="/designsministering" components={DesignsMinistering} />
            <Route path="/designsreliefsocietyspecialevents" components={DesignsReliefSocietySpecialEvents} />
            <Route path="/designsreliefsocietysundays" component={DesignsReliefSocietySundays} />
            <Route path="/tutorials" component={Tutorials} />
            <Route path="/productpage" component={ProductPage} />
            <Route path="/shoppingCart" component={ShoppingCart} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
