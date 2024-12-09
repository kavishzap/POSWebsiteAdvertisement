import React from 'react';

import config from '../config/index.json';

const MainHeroImage = () => {
  const { mainHero } = config;

  return (
    <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        className="w-full object-cover h-48 sm:h-64 md:h-80 lg:h-full"
        src={mainHero.img}
        alt="happy team image"
      />
    </div>
  );
};

export default MainHeroImage;
