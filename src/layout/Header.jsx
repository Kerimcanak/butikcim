import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
    const settings = {
        dots: true,
        arrows: true,
        dotsClass: 'slick-dots slick-thumb',
        customPaging: (i) => (
          <button>{i + 1}</button>
        ),
        appendDots: dots => (
          <div className="w-full flex justify-center mt-4">
            <ul className="flex space-x-2"> {dots} </ul>
          </div>
        ),
        centerMode: true,
        centerPadding: '0',
      };

        
  return (
    <header className="bg-white shadow-lg">
      <div className="flex justify-between px-4 py-2">
        <div className="flex items-center">
          <i className="fas fa-search text-black mr-2" />
          <i className="fas fa-shopping-cart text-black mr-2" />
          <i className="fas fa-bars text-black" />
        </div>
        <div className="flex items-center">
          <i className="fas fa-bars text-black mr-2" />
          <h1 className="text-black text-xl font-bold">
            Logo
          </h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-black">Home</a>
          <a href="#" className="text-black">Product</a>
          <a href="#" className="text-black">Pricing</a>
          <a href="#" className="text-black">Contact</a>
        </nav>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
        <Slider {...settings} className="mt-4">
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 text-white h-64">
        <h3 className="text-2xl font-bold">Title 1</h3>
        <p className="text-lg mt-2">Description 1</p>
        <div className="flex space-x-2 mt-4">
          <img src="https://picsum.photos/300/200" alt="Slide 1" />
          <img src="https://picsum.photos/300/200" alt="Slide 1" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 text-white h-64">
        <h3 className="text-2xl font-bold">Title 2</h3>
        <p className="text-lg mt-2">Description 2</p>
        <div className="flex space-x-2 mt-4">
          <img src="https://picsum.photos/300/200" alt="Slide 2" />
          <img src="https://picsum.photos/300/200" alt="Slide 2" />
        </div>
      </div>
    </Slider>

      </div>
    </header>
  );
};

export default Header;
