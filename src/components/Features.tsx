import React from 'react';

import { AiOutlineOrderedList, AiOutlineSetting } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { FaCashRegister, FaQuoteRight } from 'react-icons/fa';
import { FiShoppingBag, FiBox } from 'react-icons/fi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { MdMenuBook } from 'react-icons/md';

import config from '../config/index.json';

const iconMap = {
  FaCashRegister,
  MdMenuBook,
  AiOutlineOrderedList,
  FiShoppingBag,
  AiOutlineSetting,
  BsFileEarmarkText,
  FaQuoteRight,
  FiBox,
  HiOutlineDocumentReport,
} as const;

type IconKey = keyof typeof iconMap;

interface FeatureItem {
  name: string;
  description: string;
  icon: IconKey;
}

const Features = () => {
  const features = config.features as {
    title: string;
    subtitle: string;
    description: string;
    items: FeatureItem[];
  };

  const { title, subtitle, items: featuresList } = features;

  return (
    <div
      className="py-12 bg-background"
      id="features"
      style={{ marginTop: '-100px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p> */}
        </div>

        <div className="mt-10">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center">
            {featuresList.map((feature) => {
              const Icon = iconMap[feature.icon];
              return (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-background text-tertiary border-primary border-4 mx-auto">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="mt-4 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
