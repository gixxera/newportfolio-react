import React from 'react';
import { Grid, Cell } from 'react-mdl';

const LandingPage = () => (
  <div style={{ height: '100%', margin: 'auto' }}>
    <Grid className="landing-grid">
      <Cell col={12}>
        <img className="avatar-img" src='./img/avatar.jpg' alt="avatar" />
        <div className="banner-text">
          <h1>Web Developer</h1>
          <hr />
          <p>JavaScript | React | HTML | CSS | Node.js</p>
          <p className="social-medias">

            <a href="https://www.linkedin.com/in/milen-minchev-0049a213b" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>

            <a href="https://github.com/gixxera" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github" aria-hidden="true" />
            </a>

            <a href="https://www.facebook.com/mLnMinchev" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>

            <a href="https://www.instagram.com/milen.minchevv" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </p>
        </div>
      </Cell>
    </Grid>
  </div>
);

export default LandingPage;