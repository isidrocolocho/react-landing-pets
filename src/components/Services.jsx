import React from "react";

const Services = () => {

  return (
    <section
      id="services"
      className="flex flex-col items-center pt-5 pb-4 px-10 mb-5 mt-5 font-raleway dark:text-white"
    >
      <div className="w-full flex items-center justify-center mb-4">
        <h1 className="text-3xl text-black dark:text-white font-bold">Our Services</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 w-full p-5 col-span-2">
          <div className="flex flex-col justify-center items-center py-6 px-6">
            <h1 className="font-bold text-2xl">#01</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              aspernatur at ratione ex iusto debitis?
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-6 px-6">
            <h1 className="font-bold text-2xl">#02</h1>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima harum
              dolor aliquam expedita id amet.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-6 px-6">
            <h1 className="font-bold text-2xl">#03</h1>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam, dolor
              ut nisi iste error in!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center py-6 px-6">
            <h1 className="font-bold text-2xl">#04</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto
              nesciunt dolorum, tenetur distinctio quisquam.
            </p>
          </div>
        </div>
        <div className="flex flex-row w-full p-5">
          <img src="./imagespets/foto1.png" className="w-full" alt="Service" />
        </div>
      </div>
    </section>

  );
};

export default Services;
