import { AppBar as MuiAppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
 
const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};
 
function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Prueba
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
}
 
export default withStyles(styles)(ButtonAppBar);
