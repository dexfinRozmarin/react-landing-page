import React from 'react';
import ServiceCard from '../Sections/ServiceCard';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

function DigitalCard() {
  return (
    <Grid container spacing={24}>
      <Grid item lg={2} sm={2} md={2} xs={1} />
      <Grid item lg={4} sm={4} md={4} xs={12}>
        <Fade delay={1000} duration={1200}>
          {' '}
          <ServiceCard
            title="Mobilní zobrazení"
            description="Uživatelské rozhraní je optimalizované i pro mobilní zařízení, tak že spravovat Vaše portfolio 
            a zadávat příkazy můžete, kdekoliv"
          />
        </Fade>
      </Grid>
      <Grid item lg={4} sm={4} md={4} xs={12}>
        <Fade delay={1200} duration={1500}>
          {' '}
          <ServiceCard
            title="Notifikace o pohybech kurzu"
            description="Naše bleskové notifikace na displej mobilního telefonu nebo do prohlížeče, Vám umožní získat 
            přehled o pohybu cen, dle nastavených parametrů"
          />
        </Fade>
      </Grid>
      <Grid item lg={2} sm={2} md={2} xs={12} />
    </Grid>
  );
}

export default DigitalCard;
