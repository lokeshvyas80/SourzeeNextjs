import ProductDetailsModule from '@/components/productDetailsModule/productDetailsModule';
import withWebLayout from '@/layout/webLayout/withWebLayout';
import React from 'react';

const ProductDetails = () => {
  return (
    <ProductDetailsModule />
  );
}

export default withWebLayout(ProductDetails);
