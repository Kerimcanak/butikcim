import { ProductCard } from "../components/ProductCard";

function ShopContent() {
    const productWords = Array.from({ length: 9 }, () => Math.random().toString(36).substring(7));
const productPics = Array.from({ length: 9 }, () => 'https://picsum.photos/200/300?random=' + Math.floor(Math.random() * 1000));
    return (
      <div className="mx-6 md:mx-12 lg:mx-20">
        <div className="bg-zinc-50 flex flex-col justify-around items-center p-4 gap-4 md:flex-row">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-1/4 h-64 bg-[url('https://picsum.photos/200?random=${num}')] bg-cover bg-center"
            ></div>
          ))}
        </div>
  
        <div className="flex p-4 bg-zinc-50 flex-col items-start justify-center sm:space-y-2 md:items-center md:flex-row md:justify-between">
          <span className="text-gray-700">Showing 1-20 results</span>
          <div className="flex items-center space-x-2 sm:mb-2 sm:space-y-2 sm:flex-col">
            <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-200">{"<"}</button>
            <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-200">{">"}</button>
          </div>
          <div className="flex items-center space-x-2 sm:mb-2 sm:space-y-2 sm:flex-col">
            <label htmlFor="sort" className="text-gray-700">Popularity</label>
            <select id="sort" className="px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded">
            </select>
          </div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 sm:mb-2">Filter</button>
        </div>
        <div className="bg-zinc-50">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {productPrices.map((price, index) => (
        <ProductCard key={index} imgSrc={productPics[index]} title={productWords[index]} description={productWords[index]} price={price} />
        ))}
        </div>
        </div>
      </div>
    );
  }

export default ShopContent
  