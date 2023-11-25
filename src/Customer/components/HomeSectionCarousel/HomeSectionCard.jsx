

const HomeSectionCard =()=> {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-gray-200 rounded-lg overflow-hidden w-[15rem] mx-4">
        <div className="h-[13rem] w-[10rem]">
            <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" 
            className="object-cover object-top w-full h-full"  alt="" />

        </div>
        <div className="p-3">
          <h3 className="text-lg font-medium text-gray-400">Title</h3>
          <p className="mt-2 text-sm text-gray-300">description</p>
        </div>

      
    </div>
  )
}
export default HomeSectionCard