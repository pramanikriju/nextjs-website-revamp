import React, { useState } from "react";

import Spinner from "../components/spinner";

import { MailIcon } from "@heroicons/react/solid";


export default function Subscription()
{
    const [loading, setLoading] = useState(false);

    const toggleLoading = () => {  // the curly brace opens a multiline function
        setLoading(!loading);
      };
      

    return (
        <div className="w-full mt-10 ">
        <div className=" text-white  py-5 md:py-16 bg-gradient-to-r from-primary-blue to-primary-green">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-12 ">
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
                <button className="bg-primary-blue-800 ml-4 p-3  outline-none border-none rounded text-white" onClick={toggleLoading}>
                  <MailIcon className="w-5 h-5 inline my-auto " /> Subscribe
                  {loading && <Spinner />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}