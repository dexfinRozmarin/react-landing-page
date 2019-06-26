import React from 'react';
import { Grid } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import logoSymbol from '../../Assets/img/logo-symbol.png';
function Footer() {
  return (
    <Grid container style={{ background: '#4685ff' }}>
      <Grid item lg={1} />
      <Grid item lg={2}>
        <img
          src={logoSymbol}
          alt="logosymble"
          height="100px"
          width="100px"
          className="footer-img"
        />
      </Grid>
      <Grid item lg={2} md={2} sm={2}>
        <List>
          <ListItem style={{ color: 'white', fontWeight: 'bold' }}>
            COMPANY 
          </ListItem>
          <ListItem style={{ color: 'white' }}>O nás</ListItem>
          <ListItem style={{ color: 'white' }}>Náš Blog</ListItem>
          <ListItem style={{ color: 'white' }}>FAQ</ListItem>
          <ListItem style={{ color: 'white' }}>Kontakt</ListItem>
        </List>
      </Grid>
      <Grid item lg={3} md={3} sm={3}>
        <List>
          <ListItem style={{ color: 'white', fontWeight: 'bold' }}>
            KONTAKT
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            {' '}
            Podpora: hello@dexfin.com
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            Tisk: press@dexfin.com
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            Partneři: partners@dexfin.com
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            <i className="fab fa-facebook-f icon-style" />{' '}
            <i className="fab fa-twitter icon-style " />{' '}
            <i className="fab fa-google icon-style " />{' '}
            <i className="fab fa-skype icon-style " />
          </ListItem>
        </List>
      </Grid>
      <Grid item lg={4} md={4} sm={4}>
        <List>
          <ListItem style={{ color: 'white', fontWeight: 'bold' }}>
            {' '}
            Kanceláře společnosti{' '}
          </ListItem>
          <ListItem style={{ color: 'white'}}>
            Adresa: Pernerova 149/35, Praha, Hlavní město Praha 186 00, Czech Republic
          </ListItem>
          <ListItem style={{ color: 'white' }}>
            {' '}
            Phone: +420 735 918 688
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default Footer;
