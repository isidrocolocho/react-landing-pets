const Iconos = () => {
    return (
        <div className="fixed top-[215px] right-5 flex flex-col space-y-3">
            <a
                href="https://wa.m3/78778410"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white rounded-full text-2xl py-4 px-5 shadow-lg hover:bg-green-600 transition duration-300"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white rounded-full text-2xl py-4 px-5 shadow-lg hover:bg-blue-700 transition duration-300"
            >
                <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-500 text-white rounded-full text-2xl py-4 px-5 shadow-lg hover:bg-pink-600 transition duration-300"
            >
                <i className="fa-brands fa-instagram"></i>
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 text-white rounded-full text-2xl py-4 px-5 shadow-lg hover:bg-blue-500 transition duration-300"
            >
                <i className="fa-brands fa-twitter"></i>
            </a>
        </div>

    )
};

export default Iconos;