import Header from "../layout/Header"

function EmptyComponent() {
  return (
    <div>
      <div className="bg-emerald-700 w-full h-16">
      </div>
      <Header/>
      <div className="bg-zinc-50 flex flex-col justify-around items-center p-4 gap-4 md:flex-row">  {[1, 2, 3, 4].map((num) => (
    <div
      key={num}
      className="w-1/4 h-64 bg-cover bg-center"
      style={{ backgroundImage: `url(https://picsum.photos/200?random=${num})` }}
    ></div>
  ))}
</div>




      <div className="bg-zinc-50 w-full h-16"></div>


    </div>
  )
}

export default EmptyComponent