import React from 'react';
import ServiceCard from '../Sections/ServiceCard';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

function DigitalCard() {
  return (
    <Grid container spacing={24}>
      <Grid item lg={2} sm={2} md={2} xs={12} />
      <Grid item lg={4} sm={4} md={4} xs={12}>
        <Fade delay={500} duration={500}>
          <ServiceCard
            title="Nastavitelné obchodní rozhraní"
            description="Můžete si na ploše zobrazit až 1-6 grafů z různých obchodních párů a využít rozličných 
            indikátorů a notifikací"
          />
        </Fade>
      </Grid>
      <Grid item lg={4} sm={4} md={4} xs={12}>
        <Fade delay={800} duration={100}>
          {' '}
          <ServiceCard
            title="Přehledná správa portfolia"
            description="Je čas přejít od tabulkových přehledů s Vašim aktivy k přehlednému zobrazení Vašeho 
            portfolia a jeho jednoduché správě"
          />
        </Fade>
      </Grid>
      <Grid item lg={2} sm={2} md={2} xs={1} />
    </Grid>
  );
}

export default DigitalCard;
