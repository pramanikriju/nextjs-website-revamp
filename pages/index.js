import Navbar from "../components/navbar";
import dynamic from "next/dynamic";
import Spinner from "../components/spinner";
import Icon from "../components/landing";
import { MailIcon, RefreshIcon } from "@heroicons/react/solid";

const Footer = dynamic(() => import("../components/footer"), {
  loading: () => <Spinner />,
});
const Carousel = dynamic(() => import("../components/carousel"), {
  loading: () => <Spinner />,
});
import Card from "../components/technologies/card";
import CardAlt from "../components/technologies/card-alt";
import React, { useState } from "react";
import Head from "next/head";

import Image from "next/image";

export default function Example() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Head>
        <title>Riju Pramanik | Full Stack Developer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#5b86e5" />
      </Head>
      <Navbar />
      <main className="mt-6 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:my-24 lg:px-8 xl:mt-26 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
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
                    Book a session
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt:10 md:-mt-10 mb:16 pb:20">
            <Icon className="p-32 w-full h-auto" />
          </div>
        </div>
      </main>
      <div className="mt-28 md:mt-16">
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
            <div className="mt-10  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-5  lg:px-8 xl:mt-26">
              <div className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-6 place-content-center gap-5 ">
                  <div className="filter grayscale hover:grayscale-0 my-auto">
                    <Image
                      className=""
                      src="/img/tech/laravel.png"
                      alt=""
                      width={17}
                      height={5}
                      layout="responsive"
                    />
                  </div>
                  <div className="filter grayscale hover:grayscale-0 my-auto order-first md:order-2 md:block hidden">
                    <Image
                      className=""
                      src="/img/tech/nodejs.png"
                      alt=""
                      width={4}
                      height={2.5}
                      layout="responsive"
                    />
                  </div>
                  <div className="filter grayscale hover:grayscale-0 my-auto">
                    <Image
                      className=""
                      src="/img/tech/wordpress.png"
                      alt=""
                      width={4.4}
                      height={1}
                      layout="responsive"
                    />
                  </div>
                  <div className="filter grayscale hover:grayscale-0 my-auto">
                    <div className="my-auto">
                      <Image
                        className=""
                        src="/img/tech/tailwind.svg"
                        alt=""
                        width={3}
                        height={1}
                        layout="responsive"
                      />
                    </div>
                  </div>
                  <div className="filter grayscale hover:grayscale-0 my-auto">
                    <div className="inline-flex place-content-center m-auto">
                      <img
                        className="flex-1 md:max-h-10 max-h-16"
                        src="/img/tech/react.svg"
                        alt=""
                      />
                      <p
                        style={{ color: "#61dafb" }}
                        className="text-4xl flex-1 my-auto ml-1"
                      >
                        ReactJS
                      </p>
                    </div>
                  </div>
                  <div className="filter grayscale hover:grayscale-0 my-auto">
                    <div className="inline-flex place-content-center">
                      <img
                        className="flex-1 md:max-h-10 max-h-16"
                        src="/img/tech/bootstrap.svg"
                        alt=""
                      />
                      <p
                        style={{ color: "#7952b3" }}
                        className="text-3xl flex-1 my-auto ml-1"
                      >
                        Bootstrap
                      </p>
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
              <CardAlt />
              <CardAlt />
              <CardAlt />
            </div>
            <Carousel />
          </div>
        </div>
        <div className="w-full my-5 ">
          <div className=" text-white  py-5 md:py-16 bg-gradient-to-r from-primary-blue to-primary-green">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-12  py-10">
              <div className="text-center md:text-right">
                <div className="text-3xl">Subscribe to my newsletter</div>
                <div className="text-grey-400">No spam. Promise.</div>
              </div>
              <div className="my-auto">
                <div className="mb-4 text-center md:text-left">
                  <input
                    className="shadow text-primary-blue outline-none appearance-none  focus:ring-2 focus:ring-blue-600 rounded py-3 px-3 "
                    placeholder="john@example.com"
                  />
                  <button className="bg-primary-blue-800 ml-4 p-3  outline-none border-none rounded text-white">
                    <MailIcon className="w-5 h-5 inline " /> Subscribe
                    {loading && <Spinner />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
