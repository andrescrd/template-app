import { Box, Container } from '@material-ui/core';
import React from 'react';
import ListToolbar from '../common/ListToolbar';
import TitleHemlet from '../common/TitleHemlet';
import CustomerListResults from '../customer/CustomerListResults';

const CustomerList: React.FC = () => {
  const addButtonHandle = () => { };

  return (<>
    <TitleHemlet title="Customers" />
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ListToolbar addButtonText="Add Customer"
          addButtonClicked={addButtonHandle} />
        <Box sx={{ pt: 3 }}>
          <CustomerListResults customers={[]} />
        </Box>
      </Container>
    </Box>
  </>)
}

export default CustomerList;
