import React from 'react';
import { Grid, Button } from '@material-ui/core';

function AdvanceTool() {
  return (
    <Grid container className="advance-tool">
      <Grid item lg={2} />
      <Grid item lg={8}>
        {/*<h1 className="advance-heading">Advance Trading Tools</h1> */}
        <p style={{ textAlign: 'center' }}>
        Dexfin, není jen další "burzou pro kryptoměny", ale ecosystém navázaných produktů, které se vzájemně 
        doplňují a uživatelům přinesou jednoduše použitelnou a bezpečnou platformu pro nákup, prodej a správu 
        digitálního portfolia jedincům a institucionálním klientům. 
        </p>
        <br />
        <p style={{ textAlign: 'center' }}>
          _______________________________________________________________________________________________
        </p>
        <br />
        {/*<Button
          size="large"
          variant="contained"
          className="advance-btn"
          style={{ background: '#23cc89', color: 'white', fontWeight: 'bold' }}
        >
          {' '}
          Learn More →
        </Button>*/}
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default AdvanceTool;
