
import Header from '../layout/Header';
import HeroPromotion from '../layout/HeroPromotion';

export default function ProductDetails(props) {
    const { title, description, imgSrc, price } = props.location.state;
  
    return (
      <>
        <HeroPromotion />
        <Header />
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
          <img className="w-full" src={imgSrc} alt={title} />
          <div className="flex mt-4">
            <img className="w-1/3 h-24 object-cover" src={imgSrc} alt={title} />
            <img className="w-1/3 h-24 object-cover mx-2" src={imgSrc} alt={title} />
            <img className="w-1/3 h-24 object-cover" src={imgSrc} alt={title} />
          </div>
          <h2 className="text-xl font-bold mt-4">{title}</h2>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="ml-2 text-gray-600">10 Reviews</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-bold">{price} $</span>
            <span className="ml-2 text-green-500">In Stock</span>
          </div>
          <p className="mt-4 text-gray-700">{description}</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
            Select Options
          </button>
        </div>
      </>
    );
  }
  
