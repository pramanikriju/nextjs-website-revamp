export default function Pricing() {
  return (
    <section className="bg-none ">
      <div className="container px-5 py-12 mx-auto lg:px-20">
        <div className="flex flex-col flex-wrap pb-6 text-center  ">
          <h1 className="mb-4 text-4xl font-bold ">Services and Solutions</h1>
          <p className="text-xl font-medium leading-relaxed">
            All your technical needs, answered!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <div>
            <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg my-20 border-2">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-semibold text-center md:text-left">
                  Web Apps
                </h2>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">
                  John Doe
                </a>
              </div>
            </div>
            <div className="max-w-lg py-4 px-8 bg-white shadow-lg rounded-lg mt-20  border-2">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-semibold">
                  Digital Presence
                </h2>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">
                  John Doe
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-full py-4 px-8 bg-white shadow-lg rounded-lg my-20 border-2">
              <div className="flex justify-center md:justify-end -mt-16">
                <img
                  className="w-20 h-20 object-cover rounded-full border-2 border-primary-blue"
                  src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                />
              </div>
              <div>
                <h2 className="text-gray-800 text-3xl font-semibold text-center md:text-left">
                  Technical Lead
                </h2>
                <p className="mt-2 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  dolores deserunt ea doloremque natus error, rerum quas odio
                  quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                  minus consequuntur!
                </p>
                <br />
                <p className="text-xl font-medium leading-relaxed">
                  What do you get?
                </p>
                <p>
                  <ul className="list-disc list-inside">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </li>
                    <li>
                      Suscipit in a veritatis pariatur minus consequuntur!
                    </li>
                    <li>veritatis pariatur minus consequuntur!</li>
                  </ul>
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <a href="#" className="text-xl font-medium text-indigo-500">
                  John Doe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
