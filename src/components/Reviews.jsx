import React from "react";

const Reviews = () => {


  return (
    <section
      id="reviews"
      className="flex flex-col items-center justify-center px-6 pb-12 w-full font-raleway"
    >
      <div className="w-full flex items-center justify-center mb-10">
        <h1 className="text-3xl text-black font-bold">Reviews</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
        <div className="w-full bg-yellows dark:bg-dark-yellows dark:text-white py-6 px-6 mb-2 rounded-lg shadow-md">
          <div>
            <i className="fa-solid fa-quote-right text-3xl"></i>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              sunt quae aliquid ratione exercitationem, pariatur harum itaque animi
              saepe aliquam nam beatae nisi natus tenetur ab explicabo mollitia
              voluptates. Accusamus.
            </p>
          </div>
          <div className="flex flex-row pt-5 items-center">
            <img
              src="./imagespets/iconperson.png"
              className="w-20 px-4"
              alt="Person Icon"
            />
            <div>
              <h1 className="font-bold">Lorem, ipsum.</h1>
              <h2>Lorem, ipsum dolor.</h2>
            </div>
          </div>
        </div>
        <div className="w-full bg-purples dark:bg-dark-purples py-6 px-6 mb-2 rounded-lg shadow-md dark:text-white">
          <div>
            <i className="fa-solid fa-quote-right text-3xl"></i>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              sunt quae aliquid ratione exercitationem, pariatur harum itaque animi
              saepe aliquam nam beatae nisi natus tenetur ab explicabo mollitia
              voluptates. Accusamus.
            </p>
          </div>
          <div className="flex flex-row pt-5 items-center">
            <img
              src="./imagespets/iconperson.png"
              className="w-20 px-4"
              alt="Person Icon"
            />
            <div>
              <h1 className="font-bold">Lorem, ipsum.</h1>
              <h2>Lorem, ipsum dolor.</h2>
            </div>
          </div>
        </div>
        <div className="w-full bg-greens dark:bg-dark-greens py-6 px-6 mb-2 rounded-lg shadow-md dark:text-white">
          <div>
            <i className="fa-solid fa-quote-right text-3xl"></i>
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              sunt quae aliquid ratione exercitationem, pariatur harum itaque animi
              saepe aliquam nam beatae nisi natus tenetur ab explicabo mollitia
              voluptates. Accusamus.
            </p>
          </div>
          <div className="flex flex-row pt-5 items-center">
            <img
              src="./imagespets/iconperson.png"
              className="w-20 px-4"
              alt="Person Icon"
            />
            <div>
              <h1 className="font-bold">Lorem, ipsum.</h1>
              <h2>Lorem, ipsum dolor.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Reviews;
