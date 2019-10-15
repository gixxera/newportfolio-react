import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Experience = (props) => (
  <Grid>
    <Cell col={4}>
      <h6>{props.startYear} - {props.endYear}</h6>
    </Cell>
    <Cell col={8}>
      <h4 style={{ marginTop: '0px' }}>{props.jobName}</h4>
      <h5>{props.companyName}</h5>
      <p>{props.jobDescription}</p>
      <ul>
        <li>Programming online surveys using Decipher platform (with XML, Python, CSS3 and HTML5)</li>
        <li>QA - checking the logic, the routing by creating testing scenarios, preventing mistakes and defects in the coding</li>
        <li>Data validation and manipulations, tabulation and graphicalpresentations</li>
        <li>Project management</li>
        <li>Client communication</li>
      </ul>
    </Cell>
  </Grid>
);

export default Experience;