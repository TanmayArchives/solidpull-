"use client";
import React from 'react';
import Link from 'next/link';
import logo from '../../public/logo.png';
export default function Home() {
  return (
    <div className="flex flex-col -mt-24 items-center justify-center min-h-screen ">
    {/* <img className=' select-none' src={logo.src} alt="logo" /> */}
    <img className="max-w-full w-[30%] mx-auto -mt-6  pt-5 flex justify-center items-center sm:w-[30%]" src={logo.src} alt="LOGO"></img>
      <div className="flex items-center mb-8">
        <h1 className="text-4xl font-bold text-white">
          <span className="text-purple-600 select-none ">SOLIDPULL</span>
          
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="icon text-yellow-400 mr-2">💰</span>
          <span className="shining-text  select-none ">
            GitHub Gold Rush - Pull, Earn, Repeat!
          </span>
        </h2>
        <p className="text-lg text-gray-400  select-none ">
          A platform for developers to earn money by contributing to open-source projects.</p>
      </div>
      
<div className="mx-auto max-w-7xl px-6 pb-24  sm:pb-40 lg:flex lg:px-8 lg:pt-20">
                  <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Unlock GitHub Success with CodeCoin Analytics</h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">Elevate your GitHub contributions with CodeCoin Analytics, a cutting-edge AI-powered platform. Gain an unparalleled advantage in open-source development by harnessing our advanced algorithms to analyze pull requests and identify optimal strategies. Stay ahead of the curve and maximize your rewards with CodeCoin Analytics, the ultimate tool for GitHub success</p>
                    <div className="mt-10 flex items-center gap-x-6">
                       <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
    <Link href="/sign-in">
      Sign In
    </Link>
  </button>
                      <a href="#demoVideo" className="text-sm font-semibold leading-6 text-white">Watch the demo <span aria-hidden="true">→</span></a>
                    </div>
                  </div>
                  <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                      <img src="/main_test2.png" alt="App screenshot" width="2432" height="1442" className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"></img>
                    </div>
                  </div>
                </div>
      
      <div id="demoVideo" className="mx-auto max-w-7xl px-6 flex justify-center items-center mt-10 flex-col">
  <p className="mt-8 mb-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">See SolidPull in action.</p>
  <video className="w-full max-w-3xl" controls>
    <source src="/assets/video.mp4" type="video/mp4" /> 
    Your browser does not support the video tag.
  </video>
</div>


      <style jsx>{`
        @keyframes shine {
          from {
            background-position: -300% center;
          }
          to {
            background-position: 300% center;
          }
        }
        .shining-text {
          position: relative;
          color: transparent;
          background-image: linear-gradient(
            to right, 
            rgba(255, 255, 255, 0) 0%, 
            rgba(255, 255, 255, 0.75) 50%, 
            rgba(255, 255, 255, 0) 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          animation: shine 8s linear infinite; /* Slower animation */
          background-size: 400% 100%;
        }
      `}</style>
    </div>


    



    
  );
}
