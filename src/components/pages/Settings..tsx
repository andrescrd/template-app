import { Box, Container } from '@material-ui/core';
import React from 'react';
import { Helmet } from 'react-helmet';
import SettingsNotifications from '../settings/SettingsNotifications';
import SettingsPassword from '../settings/SettingsPassword';

const SettingsView: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Settings | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <SettingsNotifications />
          <Box sx={{ pt: 3 }}>
            <SettingsPassword />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SettingsView;
