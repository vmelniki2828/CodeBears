import React from 'react';
import { DanyaPageCointeiner } from './DanyaPage.styled';
import CustomParallax from './CustomParallax/CustomParallax';
import Lorem from './CustomParallax/Lorem/Lorem';

const DanyaPage = () => {
  return (
    <DanyaPageCointeiner>
      <CustomParallax />
      <Lorem />
    </DanyaPageCointeiner>
  );
};

export default DanyaPage;
