import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-greens dark:bg-dark-greens text-white font-raleway py-6 px-6">
      <div className="text-2xl pb-4 justify-between cursor-pointer">
        <i className="fa-brands fa-facebook p-3"></i>
        <i className="fa-brands fa-instagram p-3"></i>
        <i className="fa-brands fa-whatsapp p-3"></i>
        <i className="fa-solid fa-envelope p-3"></i>
        <i className="fa-brands fa-instagram p-3"></i>
      </div>
      <div className="flex flex-col items-center">
        <h1>© Copyright 2024</h1>
        <p className="text-center">
          ASOCIACIÓN CONEXION, Todos los derechos reservados
        </p>
      </div>
    </footer>

  );
};

export default Footer;
