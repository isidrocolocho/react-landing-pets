import './tailwindlanding2.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterApp from './components/Router';


const App = () => {
  return (
    <div className="bg-lavenders dark:bg-dark-lavenders">
      <BrowserRouter>
        <RouterApp/>
      </BrowserRouter> 
    </div>
  );
};

export default App;
