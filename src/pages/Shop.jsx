import Header from "../layout/Header"

function EmptyComponent() {
  return (
    <div>
      <div className="bg-emerald-700 w-full h-16">
      </div>
      <Header/>
      <div className="bg-zinc-50 w-full h-48 flex flex-col items-center justify-center gap-4 py-4 md:flex-row">
         <div className="relative h-[150px]">
           <img src="https://picsum.photos/400/300?random=1" alt="" className="w-full h-full object-cover"/>
           <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 flex items-center justify-center">
            First
          </div>
        </div>
         <div className="relative h-[150px]">
           <img src="https://picsum.photos/400/300?random=2" alt="" className="w-full h-full object-cover"/>
           <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 flex items-center justify-center">
            Second
        </div>
        </div>
        <div className="relative h-[150px]">
         <img src="https://picsum.photos/400/300?random=3" alt="" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 flex items-center justify-center">
        Third
        </div>
    </div>
        <div className="relative h-[150px]">
    <img src="https://picsum.photos/400/300?random=4" alt="" className="w-full h-full object-cover"/>
    <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-50 flex items-center justify-center">
      Fourth
    </div>
    </div>
    </div>

      <div className="bg-zinc-50 w-full h-16"></div>


    </div>
  )
}

export default EmptyComponent