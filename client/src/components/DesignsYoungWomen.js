import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DesignsYoungWomen = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <img alt="spools of thread on a wall" className="reponsive-img col s12"
          src={window.location.origin + '/assets/sewing-threads-on-wall_4460x4460.png'}/>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="center-align col s12">
          <Link className="breadcrumb teal-text base"
            to={'./Designs'}>Designs</Link><i className="tiny material-icons teal-text base">arrow_forward</i>
            <Link className="breadcrumb teal-text base"
              to={'./DesignsYoungWomen'}>Young Women</Link>
        </div>
            <div className="divider amber accent-2"
              style={{ height: '2px',
                      marginBottom: '30px'}}></div>
            <div className="row">
            <div className="col s12 m6">
              <div className="card-panel small">
                <div style={{ maxWidth: '100%',
                        maxHeight: '100%'}}>
                    <span className="card-title center-align teal-text text-lighten-2">Personal Progress</span>
                  </div>
                  <div style={{ marginTop: '20px',
                                marginBottom: '40px'}}>
                    <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                      to={'./DesignsPersonalProgress'}
                      >
                       Shop the Collection
                      </Link>
                    </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card-panel small">
                <div style={{ maxWidth: '100%',
                        maxHeight: '100%'}}>
                    <span className="card-title center-align teal-text text-lighten-2">Girls Camp</span>
                  </div>
                <div style={{ marginTop: '20px',
                              marginBottom: '40px'}}>
                  <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                    to={'./DesignsGirlsCamp'}
                    >
                     Shop the Collection
                    </Link>
                  </div>
                </div>
            </div>
          </div>
          <div className="row">
          <div className="col s12 m6">
            <div className="card-panel small">
              <div style={{ maxWidth: '100%',
                        maxHeight: '100%'}}>
                  <span className="card-title center-align teal-text text-lighten-2">Sundays</span>
                </div>
              <div style={{ marginTop: '20px',
                            marginBottom: '40px'}}>
                <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                  to={'./DesignsYWSundays'}
                  >
                   Shop the Collection
                  </Link>
                </div>
              </div>
          </div>
          <div className="col s12 m6">
            <div className="card-panel small">
                <div style={{ maxWidth: '100%',
                        maxHeight: '100%'}}>
                  <span className="card-title center-align teal-text text-lighten-2">Special Events</span>
                </div>
              <div style={{ marginTop: '20px',
                            marginBottom: '40px'}}>
                <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                  to={'./DesignsYWSpecialEvents'}
                  >
                   Shop the Collection
                  </Link>
                </div>
              </div>
          </div>
          </div>
      </div>
    </div>

  );
};

export default DesignsYoungWomen;
