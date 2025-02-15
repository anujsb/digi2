import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

const DigitalMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="bg-info h-full text-black">
      <div className=" mx-auto max-w-7xl t-20 ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="px-4 sm:px-6 lg:px-8 pt-20">
            {/* <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              digipalettes
            </p> */}
            <h1 className="mt-4 text-6xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Branding{" "}
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Branding is not just a logo, it’s a story. Your brand is your
              voice, make it heard.
            </p>
            {/* <Link
              to="/Payment"
              className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-black transition-all duration-200 bg-white rounded-md hover:bg-slate-100 focus:bg-slate-200 relative group"
              role="button"
            >
              Buy service
            </Link> */}
          </div>

          <div>
            <img
              className="w-full"
              src="src\assets\branding.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="grid items-center">
          <div>
            {/* <img className="w-full" src="https://i.postimg.cc/85fHHgxT/dm.jpg" alt="" /> */}
          </div>

          <div className="p-10 m-10  sm:p-6 lg:p-8">
            <h2 className="text-xl mb-6">
              Why Branding Matters?
            </h2>
            <p className="text-lg mb-6">We at DigiPalettes take care of your business and help you to
              establish your own brand. </p>
            <h2>
              A brand is more than just a name or a logo. It is the identity and
              reputation of a business, and it can influence how customers
              perceive and interact with it. A brand can make a great impact for
              several reasons, such as:
            </h2>
            <ul className="text-lg m-6 text-black">
              <li className="text-lg mb-6">
                <strong></strong>It can help a business stand
                out from the competition and attract more attention.
              </li>
              <li className="text-lg mb-6">
                <strong></strong>It can build trust and
                loyalty among customers, who may prefer a familiar and reliable
                brand over others.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> It can communicate the
                values, vision, and mission of a business, and inspire customers
                to support its goals.
              </li>
              <li className="text-lg mb-6">
                <strong></strong> It can create a consistent
                and memorable experience for customers, who may associate the
                brand with certain emotions, benefits, or qualities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketing;
