

const HomeSectionCard =({product})=> {
  return (
    <div className="cursor-pointer border border-black flex flex-col items-center bg-gray-200 rounded-lg overflow-hidden w-[15rem] mx-4 px-5">
        <div className="h-[13rem] w-[10rem]">
            <img src={product.image} 
            className="object-cover object-top w-full h-full"  alt="" />

        </div>
        <div className="p-3">
          <h3 className="text-lg font-medium text-gray-400">{product.brand}</h3>
          <p className="mt-2 text-sm text-gray-300 text-red-500 bg-yellow-400 w-[4rem]">{product.disscount}</p>
        </div>

      
    </div>
  )
}
export default HomeSectionCard