const Banner = () => {
  return (
    <section className="flex flex-col justify-center items-center mt-50 md:mt-40 sm:mt-80 dark:text-white">
      <div className="flex flex-col justify-center items-center pt-8">
        <h1 className="font-merriweather text-center text-2xl pb-4">A smarter pet pharmacy</h1>
        <p className="font-medium text-center">HUMAN-GREAT QUALITY. WALLET-FRIENDLY PRICES.</p>
        <button className="py-1 px-2 text-sm text-white font-medium bg-indigos dark:bg-dark-indigos hover:bg-[#594eff] mt-2 mb-2">
          START YOUR PLAN
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full mt-2">
        <img src="./images/dog3.png" className="hidden md:block w-full" alt="Dog Image 3" />
        <img src="./images/dog5.png" className="w-full" alt="Dog Image 5" />
        <img src="./images/cat1.png" className="w-full" alt="Cat Image 1" />
      </div>
    </section>

  );
};

export default Banner;
