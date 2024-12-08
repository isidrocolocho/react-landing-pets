const ContadorMostrar = (props) => {
    return (
        <div className="flex items-center justify-center w-20 h-20 bg-indigo-500 text-white font-bold text-3xl rounded-lg shadow-lg">
            <h1>{props.numero}</h1>
        </div>

    )
}

export default ContadorMostrar;