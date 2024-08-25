const ProductCard = () => {
  return (
    <div className="w-screen h-screen bg-black">
    <div className="w-[238px] h-[615px] bg-white flex flex-col">
      <div id="image" className="w-full h-[427px] bg-slate-500 flex"> 
      </div>

        <div className="flex flex-col items-center w-full h-[188px] bg-white gap-2">
          <p className="text-lg font-bold text-gray-800 pt-8">Product Name</p>
          <p className="text-base text-gray-600 font-bold">Description</p>
          <div className="">
          <p className="text-base text-gray-600">$19.99</p>
          </div>
        </div>

    </div>
    </div>
  );
};

export { ProductCard };
