import React from 'react';

const Tutorials = () => {
  return (
    <div>
    <div className="row">
      <div className="col s12">
        <img alt="spools of thread on a wall" className="reponsive-img col s12"
        src={window.location.origin + '/assets/sewing-threads-on-wall_4460x4460.png'}/>
      </div>
    </div>

    <div className="container">
      <div className="section teal-text base center-align">
        <h4>Tutorials</h4>
        <div className="divider amber accent-2"
          style={{ height: '2px',
                marginBottom: '30px'}}></div>
      </div>

      <div className="row">
        <div className="col s12 m4">
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/h_uhV8DiyXI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div className="grey-text text-darken-1 flow-text">
            <h5>Machine Embroirdery<br/>for Beginers</h5>
            <h6>How to set up your machine.</h6>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/V2iu8DFELbo?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div className="grey-text text-darken-1 flow-text">
            <h5>3D Freestanding<br/>Lace Flowers</h5>
            <h6>Completed in the hoop.</h6>
          </div>
        </div>

        <div className="col s12 m4">
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l8D-dobxn3M?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </div>
          <div className="grey-text text-darken-1 flow-text">
            <h5>Quick Tip:</h5>
            <h6>How to avoid tangled threads.</h6>
          </div>
        </div>
      </div>

        <div className="row section">
          <div className="col s12 m4">
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/5kjSv1I-dRQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className="grey-text text-darken-1 flow-text">
              <h5>How to Hoop &<br/>Embroider</h5>
              <h6>On a Onesie</h6>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oeZ_sxdRyoc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className="grey-text text-darken-1 flow-text">
              <h5>Embroidering on<br/>Minky Fabric</h5>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/tEGORS5vnog?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div className="grey-text text-darken-1 flow-text">
              <h5>Beginner Applique</h5>
              <h6>How to Applique on an Embroidery Machine</h6>
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

export default Tutorials;
