import AboutusFigure1 from "/AboutusFigure1.png"

//tailwind css
//let us use react router and links whenever we can
//let us remember this is a component, a part of larger web app

function AboutsContent () {
    return (
        <>
        <div id="first-section" className="bg-white w-full flex justify-center items-center">
            <div className="max-w-[1200px] w-full text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
                <p className="text-gray-600 mb-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugiat quidem, quo quaerat quisquam, vero quod aspernatur possimus ea id exercitationem quis aliquid tempora beatae quidem.
                </p>
                <button className="bg-blue-500 text-white px-8 py-3 rounded-md">Learn More</button>
                <div className="flex justify-center items-center">
                    <img src={AboutusFigure1} className="w-3/4 mt-8 mx-auto max-w-[300px]"/>
                </div>
            </div>
        </div>
        <div id="second-section" className="bg-white w-full flex justify-center items-center">
            <div className="max-w-[1200px] w-full text-center">
                <span className="text-sm font-bold text-red-500 mb-8">Problems trying</span>
                <h1 className="text-4xl font-bold text-gray-800 mb-8">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
                <p className="text-gray-600 mb-8">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics                 </p>
                <button className="bg-blue-500 text-white px-8 py-3 rounded-md">Learn More</button>
            </div>
        </div>
        <div id="third-section" className="bg-white w-full flex justify-center items-center">
            
        </div>

        </>
    )
}

export default AboutsContent