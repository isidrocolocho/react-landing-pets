import React from "react";
const Adopt = () => {
    return (
        <section
            id="adopt"
            className="flex flex-col justify-center font-bold text-white items-center px-10 pt-12 h-full font-raleway"
        >
            <h1 className="text-3xl text-black dark:text-white mb-3">Adopt Now</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                <div className="flex flex-col justify-center items-center bg-yellows dark:bg-dark-yellows w-full p-5 mx-2 grid grid-cols-2">
                    <div className="flex flex-col items-start justify-start">
                        <h1 className="text-3xl">Archie and siblings</h1>
                        <button className="border text-center border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                    </div>
                    <img src="./imagespets/4.png" className="w-full pt-4" alt="" />
                </div>

                <div className="flex flex-col justify-center items-center bg-purples dark:bg-dark-purples w-full p-5 mx-2 grid grid-cols-2">
                    <div className="flex flex-col items-start justify-start">
                        <h1 className="text-3xl">Archie and siblings</h1>
                        <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                    </div>
                    <img src="./imagespets/2.png" className="w-full pt-4" alt="" />
                </div>

                <div className="flex flex-col justify-center items-center bg-greens dark:bg-dark-greens w-full p-5 mx-2 md:col-span-2 lg:col-span-1 grid grid-cols-2">
                    <div className="flex flex-col items-start justify-start">
                        <h1 className="text-3xl">Archie and siblings</h1>
                        <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                        <img src="./imagespets/paws2.png" className="w-1/2 pt-4 hidden md:block lg:hidden" alt="" />
                    </div>
                    <img src="./imagespets/3.png" className="w-full pt-4" alt="" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 w-full pt-5">
                <div className="flex flex-col justify-center items-center bg-reds dark:bg-dark-reds w-full p-5 mx-2 grid grid-cols-2">
                    <div className="flex flex-col items-start justify-start">
                        <h1 className="text-3xl">Archie and siblings</h1>
                        <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                        <img src="./imagespets/paws2.png" className="w-1/2 pt-4 hidden lg:block" alt="" />
                    </div>
                    <img src="./imagespets/1.png" className="w-full pt-4" alt="" />
                </div>

                <div className="flex flex-col justify-center items-center bg-indigos dark:bg-dark-indigos w-full p-5 mx-2 grid grid-cols-2">
                    <div className="flex flex-col items-start">
                        <h1 className="text-3xl">Archie and siblings</h1>
                        <button className="border border-2 py-2 px-3 mt-3 hover:bg-black hover:bg-opacity-30">
                            Adopt now
                        </button>
                        <img src="./imagespets/paws2.png" className="w-1/2 pt-4 hidden lg:block" alt="" />
                    </div>
                    <img src="./imagespets/5.png" className="w-full pt-4" alt="" />
                </div>
            </div>
        </section>

    )
};

export default Adopt;