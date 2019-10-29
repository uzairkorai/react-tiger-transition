import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import { gradient, color, colorSecondary, gradientSecondary } from './themeColor';

const useStyles = makeStyles({
  colorPrimary: {
    color: 'black',
    background: gradient
  },
  colorSecondary: {
    color: color,
    // background: gradientSecondary,
    backgroundColor: colorSecondary,
  }
});

function MyAppBar(props) {
  const classes = useStyles();
  return (
    <AppBar
      classes={{
        colorPrimary: classes.colorPrimary,
        colorSecondary: classes.colorSecondary
      }}
      {...props}
    />
  );
}

export default MyAppBar;