import React from 'react';
import { Grid, Cell } from 'react-mdl';

const Education = (props) => (
  <Grid>
    <Cell col={4}>
      <h6>{props.startYear} - {props.endYear}</h6>
    </Cell>
    <Cell col={8}>
      <h4 style={{ marginTop: '0px' }}>{props.schoolName}</h4>
      <p>{props.profile}</p>
    </Cell>
  </Grid>
);

export default Education;