import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';

const About = () => (
  <div>
    <Grid>
      <Cell col={4}>
        <div style={{ textAlign: 'center' }}>
          <img src="./img/avatar.jpg" alt="avatar" style={{ width: '200px', borderRadius: '50%' }} />
        </div>
        <h2 style={{ paddingTop: '1em' }}>Milen Minchev</h2>
        <h4 style={{ color: 'grey' }}>JavaScript Enthusiast</h4>
        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
        <p>Hello, <br />My name is Milen Minchev and now I am
        really interested in JavaScript and I want to continue developing and growing in this area.
        Strong motivation, willingness to learn and high communication ability are a major part of my
        soft skills. Additionally, I consider myself to be organised, responsible and hard working in
        order to achieve the best results.</p>
        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
        <h5>Address</h5>
        <p>Sofia, Bulgaria</p>
        <h5>Email</h5>
        <p>mlnminchevv@gmail.com</p>
        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
      </Cell>
      <Cell className="about-right-col" col={8}>
        <h2>Education</h2>

        <Education
        startYear={2013}
        endYear={2017}
        schoolName="Technical University of Sofia"
        profile="Computer and Software Engineering"
      />

        <Education
          startYear={2008}
          endYear={2013}
          schoolName="High School of Mathematics and Sciences"
          profile="Informatics and Computers"
        />
        <hr style={{ borderTop: '3px solid #e22947' }} />

        <h2>Experience</h2>

        <Experience
          startYear="05.2017"
          endYear="12.2018"
          jobName="Senior Survey Programmer"
          companyName="Smart OutSourcing and Consultancy"
          jobDescription="Smart OutSourcing & Consultancy or SOC, is an
          international organisation providing online market
          research, survey programming, data analytics and
          data management services for the market
          research,corporations, marketers and such like
          industries."
        />
      </Cell>
    </Grid>
  </div>
);


export default About;