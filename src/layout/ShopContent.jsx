import { ProductCard } from "../components/ProductCard";

function ShopContent() {

    return (
      <div className="mx-6 md:mx-12 lg:mx-20">
        <div className="pt-4 bg-zinc-50 flex flex-col justify-around items-center p-4 gap-4 md:flex-row md:pt-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-1/4 h-64 bg-[url('https://picsum.photos/200?random=${num}')] bg-cover bg-center"
            ></div>
          ))}
        </div>


          <div>
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
        <div className="flex flex-wrap justify-center items-center gap-6 p-4">
          <div className="flex flex-col md:flex-row gap-6">
            <ProductCard image="/storeProdCard1.jpeg" />
            <ProductCard image="/storeProdCard2.jpeg" />
            <ProductCard image="/storeProdCard3.jpeg" />
            <ProductCard image="/storeProdCard4.jpeg" />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <ProductCard image="/storeProdCard5.jpeg" />
            <ProductCard image="/storeProdCard6.jpeg" />
            <ProductCard image="/storeProdCard7.jpeg" />
            <ProductCard image="/storeProdCard8.jpeg" />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <ProductCard image="/storeProdCard9.jpeg" />
            <ProductCard image="/storeProdCard10.jpeg" />
            <ProductCard image="/storeProdCard11.jpeg" />
            <ProductCard image="/storeProdCard12.jpeg" />
          </div>
        </div>
        <div className="bg-zinc-50">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        </div>
        </div>
        </div>

        
      </div>
    );
  }

export default ShopContent
  