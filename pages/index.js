import Navbar from "../components/navbar";
import Footer from "../components/footer";

import Card from "../components/technologies/card";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import Head from "next/head";
import animationData from "../public/img/animations/main.json";
import Image from "next/image";

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
      <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-26">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
                <span className="block main-font xl:inline ">
                  Give your business a
                </span>
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
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-blue-700 hover:bg-primary-blue-900 md:py-4 md:text-lg md:px-10"
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
                //src="https://assets7.lottiefiles.com/packages/lf20_VeqtOe.json"
                src={animationData}
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
      <div className="mt-24 lg:mt-10">
        <div className="grid grid-cols-1 place-content-center gap-8 ">
          <div className="bg-gradient-to-b from-gray-100 place-content-center border-t-4 border-primary-blue	">
            <div className="block max-w-48 md:w-48 md:h-48 rounded-full  mx-auto md:-mt-24 w-48 h-48 -mt-24 border-4 border-primary-blue">
              <Image
                className="block max-w-48 md:w-48 md:h-48 rounded-full mx-auto md:-mt-24 w-32 h-32 -mt-16 "
                src="/img/me.webp"
                width={48}
                height={48}
                layout="responsive"
                priority={true}
              />
            </div>

            <p className="text-center text-2xl mt-5">
              I'm Riju Pramanik. I help design and develop rich digital
              experiences.
            </p>
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16  lg:px-8 xl:mt-26">
              <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-8 md:mt-10 ">
                <div className="text-center">Backend Technologies</div>
                <div className="text-center">
                  <strong>Frontend Technologies</strong>
                  <div className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-5 ">
                    <div className="filter grayscale hover:grayscale-0 my-auto">
                      <Image
                        className=""
                        src="/img/tech/tailwind.svg"
                        alt=""
                        width={3}
                        height={1}
                        layout="responsive"
                      />
                    </div>
                    <div className="filter grayscale hover:grayscale-0 my-auto">
                      <Image
                        className=""
                        src="/img/tech/react.png"
                        alt=""
                        width={3}
                        height={1}
                        layout="responsive"
                      />
                    </div>
                    <div className="filter grayscale hover:grayscale-0 my-auto">
                      <Image
                        color="7952b3"
                        className=""
                        src="/img/tech/bootstrap-logo.svg"
                        alt=""
                        width={512}
                        height={408}
                        layout="responsive"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6  lg:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-8 md:mt-10 ">
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
