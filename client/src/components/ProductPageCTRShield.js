import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProductPageCTRShield extends Component {
  static contextTypes = {
    router: () => true,
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12">
            <img alt="spools of thread on a wall" className="reponsive-img col s12"
            src={window.location.origin + '/assets/sewing-threads-on-wall_4460x4460.png'}/>
          </div>
        </div>
        <div className="container">
          <div className="nav-wrapper">
            <div className="col s12">
              <a onClick={this.context.router.history.goBack}
                className="orange-text darken-2">
                <i className="material-icons tiny orange-text darken-2">navigate_before</i>
                Continue Shopping
              </a>
            </div>
          </div>
          <div className="divider amber accent-2"
            style={{ height: '2px',
                  marginBottom: '30px'}}></div>

          <div className="row">

            <div className="col s4 hide-on-small-only">
              <div className="card">
                <div className="card-image">
                  <img alt=" CTR Shield"
                  className="reponsive-img"
                  src={window.location.origin + '/assets/ctrSheild.png'}
                  style={{ maxWidth: '100%',
                          maxHeight: '100%'}}/>
                </div>
              </div>
            </div>

            <div className="col s2 hide-on-small-only">
            </div>

            <div className="col s6">
              <div><h5 className="orange-text darken-2">Design Name</h5></div>
              <div>
                <p className="orange-text darken-2">Price</p>
                <h5 className="orange-text darken-2">$5.00</h5>
              </div>
                <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                  to={'./ShoppingCart'}
                  style={{ marginTop: "20px"}}
                  >
                 Add to Cart
                </Link>
              </div>

          </div>
          <div clasName="row section" style={{ borderTop: "2px solid #ffd740",
          marginTop: "30px",
          marginBottom: "50px"}}>
            <div className="col s12 m6">
              <div className="section left"
              style={{ padding: "20px 40px"}}>
                <div className="section orange-text darken-2">
                  <h6>About this Product</h6>
                </div>
                <div className="grey-text text-darken-1">
                  <p>This is a great embroirdery file. <br/>You will love it and get
                  lots of use out of it.</p>
                </div>
              </div>
            </div>
            <div className="col s3 push-s9">
              <div className="section"
              style={{ padding: "20px 40px"}}>
                <div className="section orange-text darken-2">
                  <h6>Aditional Details</h6>
                </div>
                <div className="grey-text text-darken-1">
                  <p>Stitch Count 2765</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPageCTRShield;
