import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DesignsYMSpecialEvents = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <img alt="spools of thread on a wall" className="reponsive-img col s12"
          src={window.location.origin + '/assets/sewing-threads-on-wall_4460x4460.png'}/>
        </div>
      </div>
      <div className="container">
        <div className="center-align col s12">
          <Link className="breadcrumb teal-text base"
            to={'./Designs'}>Designs</Link><i className="tiny material-icons teal-text base">arrow_forward</i>
            <Link className="breadcrumb teal-text base"
              to={'./DesignsYoungMen'}>Young Men</Link><i className="tiny material-icons teal-text base">arrow_forward</i>
              <Link className="breadcrumb teal-text base"
                to={'./DesignsYMSpecialEvents'}>Special Events</Link>
        </div>
        <div className="divider amber accent-2"
          style={{ height: '2px',
                  marginBottom: '30px'}}></div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card hoverable">
              <Link to={'./ProductPage'}>
              <div className="card-image"
              style={{ border: "2px solid #ffd180"}}>
                <img alt="image not available" className="reponsive-img"
                src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
              </div>
              <div className="card-content">
                <div className="row">
                  <div className="col s9">
                    <h5 className="orange-text darken-2">Design Type</h5>
                    <p className="grey-text">Available Sizes</p>
                  </div>
                  <div className="col s3">
                    <p className="grey-text">Price</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card hoverable">
              <Link to={'./ProductPage'}>
              <div className="card-image"
              style={{ border: "2px solid #ffd180"}}>
                <img alt="image not available" className="reponsive-img"
                src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
              </div>
              <div className="card-content">
                <div className="row">
                  <div className="col s9">
                    <h5 className="orange-text darken-2">Design Type</h5>
                    <p className="grey-text">Available Sizes</p>
                  </div>
                  <div className="col s3">
                    <p className="grey-text">Price</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
          <div className="col s12 m4">
            <div className="card hoverable">
              <Link to={'./ProductPage'}>
              <div className="card-image"
              style={{ border: "2px solid #ffd180"}}>
                <img alt="image not available" className="reponsive-img"
                src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
              </div>
              <div className="card-content">
                <div className="row">
                  <div className="col s9">
                    <h5 className="orange-text darken-2">Design Type</h5>
                    <p className="grey-text">Available Sizes</p>
                  </div>
                  <div className="col s3">
                    <p className="grey-text">Price</p>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col s12 m4">
          <div className="card hoverable">
            <Link to={'./ProductPage'}>
            <div className="card-image"
            style={{ border: "2px solid #ffd180"}}>
              <img alt="image not available" className="reponsive-img"
              src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s9">
                  <h5 className="orange-text darken-2">Design Type</h5>
                  <p className="grey-text">Available Sizes</p>
                </div>
                <div className="col s3">
                  <p className="grey-text">Price</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card hoverable">
            <Link to={'./ProductPage'}>
            <div className="card-image"
            style={{ border: "2px solid #ffd180"}}>
              <img alt="image not available" className="reponsive-img"
              src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s9">
                  <h5 className="orange-text darken-2">Design Type</h5>
                  <p className="grey-text">Available Sizes</p>
                </div>
                <div className="col s3">
                  <p className="grey-text">Price</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card hoverable">
            <Link to={'./ProductPage'}>
            <div className="card-image"
            style={{ border: "2px solid #ffd180"}}>
              <img alt="image not available" className="reponsive-img"
              src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s9">
                  <h5 className="orange-text darken-2">Design Type</h5>
                  <p className="grey-text">Available Sizes</p>
                </div>
                <div className="col s3">
                  <p className="grey-text">Price</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col s12 m4">
          <div className="card hoverable">
            <Link to={'./ProductPage'}>
            <div className="card-image"
            style={{ border: "2px solid #ffd180"}}>
              <img alt="image not available" className="reponsive-img"
              src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s9">
                  <h5 className="orange-text darken-2">Design Type</h5>
                  <p className="grey-text">Available Sizes</p>
                </div>
                <div className="col s3">
                  <p className="grey-text">Price</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card hoverable">
            <Link to={'./ProductPage'}>
            <div className="card-image"
            style={{ border: "2px solid #ffd180"}}>
              <img alt="image not available" className="reponsive-img"
              src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s9">
                  <h5 className="orange-text darken-2">Design Type</h5>
                  <p className="grey-text">Available Sizes</p>
                </div>
                <div className="col s3">
                  <p className="grey-text">Price</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card hoverable">
            <Link to={'./ProductPage'}>
            <div className="card-image"
            style={{ border: "2px solid #ffd180"}}>
              <img alt="image not available" className="reponsive-img"
              src={window.location.origin + '/images/sorry-image-not-available-300x300.png'}/>
            </div>
            <div className="card-content">
              <div className="row">
                <div className="col s9">
                  <h5 className="orange-text darken-2">Design Type</h5>
                  <p className="grey-text">Available Sizes</p>
                </div>
                <div className="col s3">
                  <p className="grey-text">Price</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </div>
        </div>
        <div className="col s12">
          <ul className="pagination grey-text">
            <li className="disabled"><i className="material-icons">chevron_left</i></li>
            <li className="active teal lighten-5">1</li>
            <li className="waves-effect">2</li>
            <li className="waves-effect">3</li>
            <li className="waves-effect">4</li>
            <li className="waves-effect">5</li>
            <li className="waves-effect"><i className="material-icons">chevron_right</i></li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default DesignsYMSpecialEvents;
