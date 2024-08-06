import Slider from "@ant-design/react-slick";


const Header = () => {

        
  return (
    <header className="bg-white shadow-lg">
<div className="flex md:flex-row justify-between px-4 py-2">
  <div className="flex items-center">
    <i className="fas fa-shopping-bag text-black mr-2" />
    <h1 className="text-black text-xl font-bold">Butikcim</h1>
  </div>
  <div id="right-icons" className="flex items-center md:mt-0">
    <i className="fas fa-search text-black mr-2" />
    <i className="fas fa-shopping-cart text-black mr-2" />
    <i className="fas fa-bars text-black" />
  </div>
</div>
    <nav className="flex flex-col pb-4 items-center md:flex-row md:justify-center md:space-x-4">
      <a href="#" className="text-black mb-2 md:mb-0">Home</a>
      <a href="#" className="text-black mb-2 md:mb-0">Product</a>
      <a href="#" className="text-black mb-2 md:mb-0">Pricing</a>
      <a href="#" className="text-black mb-2 md:mb-0">Contact</a>
    </nav>









      <div className="relative">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />

        <Slider>
        <div className="relative bg-[url('https://picsum.photos/seed/picsum/200/300')] bg-cover h-72">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl font-bold">Title</h1>
                <p className="mt-2">Description text goes here.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded">Button</button>
            </div>
        </div>

        <div className="relative bg-[url('https://picsum.photos/seed/picsum/200/300')] bg-cover h-72">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
                <h1 className="text-2xl font-bold">Title</h1>
                <p className="mt-2">Description text goes here.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded">Button</button>
            </div>
        </div>
        </Slider>

      </div>
    </header>
  );
};

export default Header;
