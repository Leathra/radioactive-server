import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="page-footer teal lighten-5">
      <div className="row">
        <div className="col s6 grey-text text-darken-1">
          <p>In site navigation</p>
        </div>
        <div className="col s6 grey-text text-darken-1">
          <p>Outside links</p>
        </div>
      </div>
      <div className="footer-copyright teal lighten-4">
        <div className='col s12 m6 offset-s6 grey-text text-darken-1'>
        Copyright LDS Embroidery 2018. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
