import React from 'react';
import Banner from './component/Banner';
import OurCollection from './component/OurCollection';
import ShopByStyle from './component/ShopByStyle';
import ShopByFactory from './component/ShopByFactory';
import ShopByCategory from './component/ShopByCategory';
import ExistingBuyersLogo from './component/ExistingBuyersLogo';

const HomeDecorModule = () => {
  return (
    <>
      {/* <Banner /> */}
      <OurCollection />
      <ShopByStyle />
      <ShopByFactory />
      <ShopByCategory />
      <ExistingBuyersLogo />
    </>
  );
}

export default HomeDecorModule;
