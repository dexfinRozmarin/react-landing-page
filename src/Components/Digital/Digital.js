import React from 'react';
import { Grid } from '@material-ui/core';

function Digital() {
  return (
    <Grid container className="digital">
      <Grid item lg={2} md={2} sm={2} />
      <Grid item lg={8} md={8} sm={8} className="plus-image">
        <h1 className="digital-heading">
          Mezinárodní burza pro digitální měny a tokenizovaná aktiva
        </h1>
        <p style={{ textAlign: 'center' }}>
          Dexfin burza, umožňuje funkcionality, které běžné burzy neumožňují. Od plné integrace Tradingview grafů 
          a indikátorů, přes push-notifikace o cenách do telefonu nebo prohlížece, přes možnost si nastavit pracovní 
          plochu dle svých potřeb a třeba si přímo z rozhraní přečíst ty nejžhavější novinky z bitcoinového světa.  
        </p>
      </Grid>
      <Grid item lg={2} md={2} sm={2} />
    </Grid>
  );
}

export default Digital;
