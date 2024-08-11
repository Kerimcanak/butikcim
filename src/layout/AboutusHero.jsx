import { Link } from "react-router-dom";
import AboutusFigure1 from "/AboutusFigure1.png"


export const AboutusHero = () => {
    return (
        <div className="flex-col h-screen w-full md:flex-row">
            <div className="w-full h-72 bg-white md:flex md:items-center md:h-3/4 ">
                <div className="w-full pb-16 pt-16">
                    <div id="first-section-text" className="flex flex-col justify-center text-center">
                        <div >
                            <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
                            <p className="text-gray-600 mb-8">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat quidem, quo quaerat quisquam, vero.
                            </p>
                            <Link className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-400">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full"><img src={AboutusFigure1} className="mx-auto max-w-full md:max-w-[600px]"/></div>
            </div>
        </div>
    )
}

