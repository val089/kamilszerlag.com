'use client';

import Lottie from 'lottie-react';
import animation from './animation.json';

export const HomePageIntro = () => (
  <section id="home" className="w-full h-screen bg-blue-100">
    <div className="container flex flex-row h-full mx-auto items-center md:justify-center justify-items-start px-4">
      <div className="text-left md:max-w-[50%] max-w-[100%] w-full">
        <h3 className="text-xl font-normal">Hi! I am Kamil Szerląg</h3>
        <h1 className="text-3xl md:text-6xl my-4">
          <strong>FRONTEND DEVELOPER</strong>
        </h1>
        <h2 className="text-xl">
          <strong>
            with React Native, React, Next and with some design skills.
          </strong>
        </h2>
        <p className="text-base mt-10">
          Have some project idea and in need of a developer? Would like to do a
          collab or have a job offer? Do not hesitate to contact me.
        </p>
        <button className="mt-8 px-4 py-2 bg-orange-600 text-white rounded-md font-bold">
          Hire me
        </button>
      </div>

      <div className="max-w-[50%] w-full hidden md:block">
        <div className="max-w-[400px] mx-auto">
          <Lottie animationData={animation} loop={true} autoplay={true} />
        </div>
      </div>
    </div>
  </section>
);
