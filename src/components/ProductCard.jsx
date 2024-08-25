import PropTypes from 'prop-types';

const ProductCard = ({ image }) => {
  return (
    <div>
    <div className="w-[238px] h-[615px] bg-white flex flex-col">
      <div id="image" className="w-full h-[427px] bg-slate-500 flex bg-center" style={{ backgroundImage: `url(${image})` }}> 
      </div>

        <div className="flex flex-col items-center w-full h-[188px] bg-white gap-2">
          <p className="text-lg font-bold text-gray-800 pt-8">Product Name</p>
          <p className="text-base text-gray-600 font-bold">Description</p>
          <div className="flex flex-row gap-2">
          <p className="text-base text-gray-600">$19.99</p>
          <p className="text-base text-emerald-700 font-bold">$19.99</p>
          </div>
          <div className="flex flex-row gap-2"><i class="fa-solid fa-circle text-sky-500"></i>
          <i class="fa-solid fa-circle text-emerald-700">
            </i><i class="fa-solid fa-circle text-orange-500"></i>
            <i class="fa-solid fa-circle"></i></div>
        </div>

    </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired
};

export { ProductCard };

