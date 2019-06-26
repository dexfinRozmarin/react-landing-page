import React from 'react';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Animated } from 'react-animated-css';
export default function Header() {
  return (
    <Grid container style={{ marginBottom: '50px' }}>
      <Grid item lg={12} className="bg-overlay">
        <section className="main-section">
          <h1 className="main-heading">
          Platforma pro nákup, prodej a správu digitálních měn a tokenizovaných aktiv
          </h1>
          <p className="main-para">
          Dexfin přináší platformu, která umožňuje růst Vašeho finančního portfolia, dky finančním produktům nové 
          generace.
          </p>
          <Animated
            animationIn="bounceIn"
            animationOut="zoomIn"
            isVisible={true}
          >
            <div className="main-div">
              <Button
                variant="contained"
                size="large"
                style={{
                  background: '#00b36b',
                  margin: '5px',
                  color: 'white',
                  fontWeight: 'bold'
                }}
              >
                {' '}
                Registrace
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                style={{ fontWeight: 'bold' }}
              >
                {' '}
                Intro Video
              </Button>
            </div>
          </Animated>
        </section>
      </Grid>
    </Grid>
  );
}
