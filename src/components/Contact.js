import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

const Contact = () => (
  <div className="contact-body">
    <Grid className="contact-grid">
      <Cell col={6}>
        <h2>Milen Minchev</h2>
        <img src="./img/avatar.jpg" alt="avatar" style={{ width: '250px' }} />
        <ul className="contact-grid__about">
          <li>Analytical thinking and excellent attention to detail</li>
          <li>Team oriented approach</li>
          <li>Passionate, collaborative and results oriented</li>
          <li>Always open to acquire new knowledge and skills</li>
          <li>Experience in a dynamic work environment</li>
          <li>Ability to prioritize and meet deadlines</li>
        </ul>
      </Cell>
      <Cell col={6}>
        <h2>Contact Me</h2>
        <hr />

        <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                <i className="fa fa-phone-square" aria-hidden="true" />
                <span className="contact-info">+359 898 515 911</span>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                <i id="location" className="fa fa-location-arrow" aria-hidden="true" />
                <span className="contact-info">Sofia, Bulgaria</span>
              </ListItemContent>
            </ListItem>
            <ListItem>
              <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                <i className="fa fa-envelope" aria-hidden="true" />
                <span className="contact-info">mlnminchevv@gmail.com</span>
              </ListItemContent>
            </ListItem>
          </List>
        </div>
      </Cell>
    </Grid>
  </div>
);

export default Contact;