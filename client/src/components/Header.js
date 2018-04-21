import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
            <li key="1"><a href="/auth/google">Login With Google</a></li>,
            <li key="2"><a href="/auth/google">Sign Up</a></li>,
            <li key="5">
              <Link className="grey-text text-darken-1"
                to={'./Designs'}
                >
                Designs
              </Link>
            </li>,
            <li key="6">
              <Link className="grey-text text-darken-1"
                to={'./Tutorials'}
                >
                Tutorials
              </Link>
            </li>]
              ;
      default:
        return [
          <li key="2"><a href="/api/logout" className="grey-text text-darken-1">Logout</a></li>,
          <li key="5">
            <Link className="grey-text text-darken-1"
              to={'./Designs'}
              >
              Designs
            </Link>
          </li>,
          <li key="6">
            <Link className="grey-text text-darken-1"
              to={'./Tutorials'}
              >
              Tutorials
            </Link>
          </li>]
          ;

    }
  }

  renderContentRight(){
      switch (this.props.auth) {
        case null:
          return;
        default:
          return [
            <li key="1"><Payments /></li>,
            <li key="3" style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>]
            ;
      }
  }

  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper teal lighten-5">
          <Link
            to={this.props.auth ? '/' : '/'}
            className="brand-logo center grey-text text-darken-1"
            >
            LDS Embroirdery
          </Link>
          <ul className="left">
            {this.renderContent()}
          </ul>
          <ul className="right grey-text text-darken-1">
            {this.renderContentRight()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
