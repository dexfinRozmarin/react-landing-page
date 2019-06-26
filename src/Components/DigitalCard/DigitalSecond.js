import React from 'react';
import icon4 from '../../Assets/icons/icon4.png';
import icon5 from '../../Assets/icons/icon5.png';
import icon6 from '../../Assets/icons/icon6.png';
import Fade from 'react-reveal/Fade';
function DigitalCard() {
  return (
    <div>
      <div className="grid-row" style={{ marginTop: '50px' }}>
        <Fade duration={2500} delay={600}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon4} alt="icon4" />
              <h3>Nízké poplatky</h3>
              <p>Profitabilní investiční příležitosti a podmínky</p>
              {/*<button className="storage">Read More → </button>*/}
            </div>
          </div>
        </Fade>
        <Fade duration={3000} delay={800}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon5} alt="icon" />
              <h3>Podpora 24/7</h3>
              <p>Instantní, přátelská a vždy ochotna pomoci</p>
              {/*<button className="storage">Read More → </button>*/}
            </div>
          </div>
        </Fade>
        <Fade duration={3500} delay={1000}>
          <div className="grid-column">
            <div className="grid-card">
              <img src={icon6} alt="icon" />
              <h3>Rychlost platformy</h3>
              <p>Maximální rychlost procesování Vašich transakcí</p>
              {/*<button className="storage">Read More → </button>*/}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default DigitalCard;
