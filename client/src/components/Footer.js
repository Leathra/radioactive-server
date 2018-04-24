import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer teal lighten-5">
    <div className="container">
      <div className="row">

        <div className="col s6 grey-text text-darken-1">
          
          <Link to={'./Designs'}
          className="grey-text text-darken-1 section">
          <h6>Designs</h6>
          </Link>
          <Link to={'./Tutorials'}
          className="grey-text text-darken-1 section">
          <h6>Tutorials</h6>
          </Link>
        </div>
        <div className="col s6 grey-text text-darken-1">

        </div>
      </div>
    </div>
    <div className="footer-copyright teal lighten-4">
      <div className='col s12 m6 offset-s6 grey-text text-darken-1'>
      <i className="material-icons tiny">copyright</i>LDS Embroidery 2018. All rights reserved
      </div>
    </div>
    </footer>
  );
};

export default Footer;
