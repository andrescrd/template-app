import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar: React.FC<any> = (props) => {
  return (
    <AppBar
      elevation={0}
      {...props}
    >
      <Toolbar sx={{ height: 64 }}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
