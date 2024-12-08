import { useState } from "react";
import ContadorMostrar from "../components/ContadorMostrar";

const Contador = () => {

    const [Counter, setCounter] = useState(0);
    const incrementCounterUnoUno = () => {
        setCounter(Counter + 1);
    }

    // const incrementCounterDosDos= () =>{
    //     setCounter(Counter+2);
    // }

    const resetCounter = () => {
        setCounter(0);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 px-8 py-6 rounded-lg shadow-lg space-y-6">
                <ContadorMostrar numero={Counter} />
                <div className="flex space-x-4">
                    <button
                        onClick={incrementCounterUnoUno}
                        className="inline-flex items-center justify-center rounded-full font-medium transition-all text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 px-6 py-2"
                    >
                        Incrementar
                    </button>
                    <button
                        onClick={resetCounter}
                        className="inline-flex items-center justify-center rounded-full font-medium transition-all text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:ring-red-300 px-6 py-2"
                    >
                        Restablecer
                    </button>
                </div>
            </div>
        </div>

    )
};

export default Contador;