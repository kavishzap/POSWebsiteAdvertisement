import React from 'react';

import { Link } from 'react-scroll';

import config from '../config/index.json';

const About = () => {
  const { navigation, company } = config;
  const { logo, name: companyName } = company;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
      style={{ marginTop: '-100px' }}
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 mt-6">
          {navigation.map((item) => (
            <Link
              spy={true}
              active="active"
              smooth={true}
              duration={1000}
              key={item.name}
              to={item.href}
              className="font-medium text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a href="" rel="nofollow">
              MindKore Solutions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
