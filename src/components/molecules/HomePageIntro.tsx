'use client';

import Lottie from 'lottie-react';
import animation from './animation.json';

export const HomePageIntro = () => {
  return (
    <div className="container flex flex-row h-full w-full mx-auto items-center justify-center px-4">
      <div className="text-left max-w-[50%] w-full">
        <h1 className="text-5xl font-extrabold">
          Hi! <br />
          I am Kamil Szerląg <br />
          Frontend Dev
        </h1>
        <p className="mt-4">
          Frontend developer working with React, Next and React Native.
        </p>
        <button className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md font-bold">
          Hire me
        </button>
      </div>

      <div className="max-w-[50%] w-full">
        <div className="max-w-[400px] mx-auto">
          <Lottie animationData={animation} loop={true} autoplay={true} />
        </div>
      </div>

      <div className="flex-1">
        {/* <h1 className="text-4xl font-bold">Hello</h1> */}
      </div>
    </div>
  );
};
