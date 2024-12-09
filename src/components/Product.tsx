import React from 'react';

import { motion } from 'framer-motion';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section
      className={`bg-background py-8`}
      id="product"
      style={{ marginTop: '-100px' }}
    >
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index % 2 ? 'text-primary' : 'text-border'}
                >
                  {word}{' '}
                </span>
              ))}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <motion.img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
              initial={{ x: 0, y: 0 }} // Starting position
              animate={{
                y: [0, -10, 10, 0], // Move up and down smoothly
              }}
              transition={{
                duration: 2, // Total duration of one cycle
                repeat: Infinity, // Repeat the animation infinitely
                repeatType: 'loop', // Ensure a seamless loop
                ease: 'easeInOut', // Smooth easing function
              }}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <motion.img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
              initial={{ x: 0, y: 0 }} // Starting position
              animate={{
                y: [0, -10, 10, 0], // Move up and down smoothly
              }}
              transition={{
                duration: 2, // Total duration of one cycle
                repeat: Infinity, // Repeat the animation infinitely
                repeatType: 'loop', // Ensure a seamless loop
                ease: 'easeInOut', // Smooth easing function
              }}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title.split(' ').map((word, index) => (
                  <span
                    key={index}
                    className={index % 2 ? 'text-primary' : 'text-border'}
                  >
                    {word}{' '}
                  </span>
                ))}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
