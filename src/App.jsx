import {useState} from "react";
import "./App.css";

function App() {
    const [converter, setConverter] = useState("Binary");
    return (
        <>
            <div className="bg-[url(/src/assets/pacman-1.jpg)] flex items-center flex-col relative h-dvh bg-no-repeat bg-cover bg-center font-silkscreen">
                <span className="absolute w-full h-full top-0 left-0 bg-black/20 z-0"></span>
                <h1 className="w-sm md:w-full relative mt-20 text-white text-3xl md:text-5xl text-center font-bold uppercase z-10 ">
                    Convert <span className="text-orange-400">To</span>{" "}
                    <span className="text-pink-400">Binary</span>
                </h1>
                <div
                    className="w-full md:w-3/4 h-3/4 p-6 relative flex items-center justify-center flex-col z-10
                ">
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="w-full p-3 rounded-tl-4xl rounded-tr-4xl bg-white/50">
                            <input
                                type="number"
                                placeholder="Decimal Number"
                                className="w-full border border-white py-4 px-6
                                bg-white
                            text-pink-900  placeholder:text-sm outline-0 rounded-tl-3xl rounded-tr-3xl"
                                onChange={(e) => {
                                    setConverter(
                                        Number(e.target.value).toString(2)
                                    );
                                }}
                            />
                        </div>
                        <div className="w-full max-w-full mt-6 py-12 bg-white/40  text-red-500  text-3xl md:text-4xl text-center font-bold overflow-hidden  rounded-bl-4xl rounded-br-4xl">
                            {converter}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
