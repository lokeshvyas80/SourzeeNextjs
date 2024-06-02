import React from 'react';
import withWebLayout from "../../layout/webLayout/withWebLayout";
import HomeDecorModule from '@/components/homeDecorModule/homeDecorModule';

const HomeDecor = () => {
  return (
    <>
      <HomeDecorModule />
    </>
  );
}

export default withWebLayout(HomeDecor);
