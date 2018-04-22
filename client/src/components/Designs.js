import React from 'react';
import { Link } from 'react-router-dom';

const Designs = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <img alt="spools of thread on a wall" className="reponsive-img col s12"
          src={window.location.origin + '/assets/sewing-threads-on-wall_4460x4460.png'}/>
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center' }}>
            <h4 className="teal-text base">Designs</h4>
            <div className="divider amber accent-2"
              style={{ height: '2px',
                      marginBottom: '30px'}}></div>
            <div className="row">
            <div className="col s12 m6">
              <div className="card-panel small">
                <img alt="I am a child of God design"
                src={window.location.origin + '/images/primaryNav-01.jpg'}
                style={{ maxWidth: '100%',
                        maxHeight: '100%'}}/>
                  <div style={{ maxWidth: '100%',
                          maxHeight: '100%'}}>
                    <span className="card-title center-align teal-text text-lighten-2">Primary</span>
                  </div>
                  <div style={{ marginTop: '20px',
                                marginBottom: '40px'}}>
                    <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                      to={'./DesignsPrimary'}
                      >
                       Shop the Collection
                      </Link>
                    </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div className="card-panel small">
                <img alt="Camp Helaman design"
                src={window.location.origin + '/images/campHelaman.png'}
                style={{ maxWidth: '100%',
                        maxHeight: '100%'}}/>
                  <div style={{ maxWidth: '100%',
                          maxHeight: '100%'}}>
                    <span className="card-title center-align teal-text text-lighten-2">Young Men</span>
                  </div>
                <div style={{ marginTop: '20px',
                              marginBottom: '40px'}}>
                  <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                    to={'./DesignsYoungMen'}
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
              <img alt="Value Flower design"
              src={window.location.origin + '/images/valueFlowerAplique.png'}
              style={{ maxWidth: '100%',
                      maxHeight: '100%'}}/>
                <div style={{ maxWidth: '100%',
                        maxHeight: '100%'}}>
                  <span className="card-title center-align teal-text text-lighten-2">Young Women</span>
                </div>
              <div style={{ marginTop: '20px',
                            marginBottom: '40px'}}>
                <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                  to={'./DesignsYoungWomen'}
                  >
                   Shop the Collection
                  </Link>
                </div>
              </div>
          </div>
          <div className="col s12 m6">
            <div className="card-panel small">
              <img alt="Relief Society Moto"
              src={window.location.origin + '/images/reliefSocietyNav.jpg'}
              style={{ maxWidth: '100%',
                      maxHeight: '100%'}}/>
                <div style={{ maxWidth: '100%',
                        maxHeight: '100%'}}>
                  <span className="card-title center-align teal-text text-lighten-2">Relief Society</span>
                </div>
              <div style={{ marginTop: '20px',
                            marginBottom: '40px'}}>
                <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                  to={'./DesignsReliefSociety'}
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

export default Designs;
