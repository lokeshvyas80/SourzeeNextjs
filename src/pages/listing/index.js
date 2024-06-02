import React from 'react';
import withWebLayout from '@/layout/webLayout/withWebLayout';
import ListingModule from '@/components/listingModule/listingModule';

const Listing = () => {
  return (
    <ListingModule />
  );
}

export default withWebLayout(Listing);
