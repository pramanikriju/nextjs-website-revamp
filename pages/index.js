import Navbar from "../components/navbar";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import Head from "next/head";

const blob_lottie =
  "https://assets9.lottiefiles.com/packages/lf20_wax9lqok.json";
const cloud_lottie =
  "https://assets3.lottiefiles.com/packages/lf20_ygr1xkdj.json";

export default function Example() {
  return (
    <>
      <Head>
        <title>Riju Pramanik | Full Stack Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#5b86e5" />
      </Head>
      <Navbar />
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-26">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline ">Give your business a</span>
                <br className="hidden sm:inline" />
                <span className="block main-text xl:inline">
                  technology boost
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm Riju Pramanik, a full stack developer and technical
                consultant. This site is still under construction, stay tuned
                for updates!
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="md:-mt-10">
              <Player
                autoplay
                loop
                src="https://assets7.lottiefiles.com/packages/lf20_VeqtOe.json"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                className="z-0"
                speed={1}
                //renderer="canvas"
              ></Player>
              {/* <Lottie
                options={defaultOptions}
                className="w-full h-full"
                height={700}
                width={width}
                speed={0.7}
              /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
