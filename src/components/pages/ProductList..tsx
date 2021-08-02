import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import React from 'react';
import TitleHemlet from '../common/TitleHemlet';
import ProductCard from '../product/ProductCard';
import ProductListToolbar from '../product/ProductListToolbar';

const ProductList: React.FC = () => {
  let products: any[] = [];

  return (
    <>
      <TitleHemlet title="Products" />
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {products.map((product) => (
                <Grid
                  item
                  key={product.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination
              color="primary"
              count={3}
              size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;
