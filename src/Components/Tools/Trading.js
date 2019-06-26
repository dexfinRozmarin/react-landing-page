import React from 'react';
import { Grid, Button } from '@material-ui/core';

function Trading() {
  return (
    <Grid container className="advance-tool">
      <Grid item lg={2} />
      <Grid item lg={8}>
        {/*<h1 className="advance-heading">Pokročilá obchodní nástroje</h1> */}
        <p style={{ textAlign: 'center' }}>
        Dexfin je globální leader v bitcoinové a blockchainové revoluci, díky obchodní platformě a dalším 
        navazujícím produktům, které jsou připraveny pro klienty, kteří vyžadují bleskově-rychlé procesování 
        obchodů, bezpečné nakládání s digitálními prostředky a ty nejvyšší bezpečností standardy.
        </p>

        <br />
        {/*<Button
          size="large"
          className="advance-btn"
          style={{
            background: 'transparent',
            color: '#23cc89',
            fontWeight: 'bold'
          }}
        >
          {' '}
          APP DOWNLOAD →
        </Button> */}
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default Trading;
