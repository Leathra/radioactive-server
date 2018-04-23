import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <img alt="spools of thread on a wall" className="reponsive-img col s12"
          src={window.location.origin + '/assets/sewing-threads-on-wall_4460x4460.png'}/>
        </div>
      </div>
      <div clasName="container" style={{ textAlign: 'center' }}>
        <div className="row"
              style={{ margin: '40px 20px'}}>
          <div className="col m6 hide-on-small-only">
            <div className="card">
              <div className="card-image">
                <img alt="Great to be eight t-shirt"
                className="reponsive-img"
                src={window.location.origin + '/images/8shirt.png'}
                style={{ maxWidth: '100%',
                        maxHeight: '100%'}}/>
              </div>
            </div>
          </div>
          <div className="col s12 m6">
            <div className="card"
            style={{ border: "2px solid #ffd740"}}>
              <div className="card-content">
                <div><h3 className="card-title orange-text darken-2">It is Great to be Eight Collection</h3></div>
                <div><p className="grey-text text-darken-1">From quotes to CTR medalions, this collection is full of fun designs to make and suitable
                for shirts, pillows, quilts, towels and more!</p></div>
                <div>
                  <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                    to={'./DesignsPrimary'}
                    style={{ marginTop: "20px"}}
                    >
                     Shop the Collection
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row s10 offset-1"
              style={{ margin: '40px 35px'}}>
          <div className="teal lighten-5">
          <div className="card transparent">
            <div className="card-content s3 m2 l1"
              style={{ border: "2px solid #ffd740",
                      margin: "30px",
                      maxWidth: "300px"}}>
              <div><h3 className="card-title orange-text darken-2">New Beginings</h3></div>
              <div><p className="grey-text text-darken-1">Inspiration and project ideas</p></div>
              <div>
                  <Link className="waves-effect waves-light btn orange darken-2 hoverable"
                    to={'./DesignsYoungWomen'}
                    style={{ margin: "20px"}}
                    >
                     See More
                    </Link>
                </div>
              </div>
            </div>
            <div className=" col m6 s12">
              <div className="card-image transparent">
                <img alt="New Beginings Design"
                className="responsive-img"
                src={window.location.origin + '/images/newBeginings.png'}
                style={{ maxWidth: '100%',
                        maxHeight: '100%'}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="row s10 offset-1 center-align"
              style={{ margin: '40px 20px'}}>
          <div className="col m4 s12">
            <div className="section">
              <div className="card-image">
                <img alt="CTR Towel Design"
                className="responsive-img"
                src={window.location.origin + '/images/ctrTowel2.png'}
                style={{ maxWidth: '100%',
                        maxHeight: '100%'}}/>
              </div>
            </div>
            <div className="card-content">
              <h5 className="orange-text darken-2">CTR Towel</h5>
            </div>
            <div className="card-action">
              <Link to={'./Tutorials'}
              className="orange-text darken-2">
                See Tutorial
              </Link>
            </div>
          </div>
          <div className="col m4 s12">
            <div className="section">
              <div className="card-image">
                <img alt="Relief Society Logo"
                className="responsive-img"
                src={window.location.origin + '/images/reliefsociety.jpg'}
                style={{ maxWidth: '100%',
                        maxHeight: '100%'}}/>
              </div>
            </div>
            <div className="card-content">
              <h5 className="orange-text darken-2">Relief Society Sampler</h5>
            </div>
            <div className="card-action">
              <Link to={'./DesignsReliefSociety'}
              className="orange-text darken-2">
                See Designs
              </Link>
            </div>
          </div>
          <div className="col m4 s12">
            <div className="section">
              <div className="card-image">
                <img alt="Blue and Gold Table decorations"
                className="responsive-img"
                src={window.location.origin + '/images/cubScouts.png'}
                style={{ maxWidth: '100%',
                        maxHeight: '100%'}}/>
              </div>
            </div>
            <div className="card-content">
              <h5 className="orange-text darken-2">Blue & Gold</h5>
            </div>
            <div className="card-action">
              <Link to={'./DesignsPrimary'}
              className="orange-text darken-2">
                Featured Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
