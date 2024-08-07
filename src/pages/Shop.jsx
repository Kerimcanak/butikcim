import Header from "../layout/Header"

function EmptyComponent() {
  return (
    <div>
      <div className="bg-emerald-700 w-full h-16">
      </div>
      <Header/>
      <div className="bg-zinc-50 flex flex-col justify-around items-center p-4 gap-4 md:flex-row">  
      {[1, 2, 3, 4].map((num) => (
    <div
      key={num}
      className="w-1/4 h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(https://picsum.photos/200?random=${num})` }}
    ></div>
  ))}
</div>

    <div className="flex items-center justify-between p-4 bg-zinc-50">
      <span className="text-gray-700">Showing 1-20 results</span>
      <div className="flex items-center space-x-2">
        <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-200">{"<"}</button>
        <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-200">{">"}</button>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="sort" className="text-gray-700">Popularity</label>
        <select id="sort" className="px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded">
          {/* Options would be populated here */}
        </select>
      </div>
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">Filter</button>
    </div>

    </div>
  )
}

export default EmptyComponent