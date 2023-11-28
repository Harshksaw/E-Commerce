import "./ProductCard.css"


const ProductCard = ({item}) => {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className=''>

                <img className='h-[25rem] w-full object-cover object-left-top '
                
                    src={item.imageUrl}
                    

                    alt=""/>

                    



            </div>

            <div className='textPart bg-white p-3 '>
                <div>
                    <p className='font-bold opacity-60'> {item.brand}</p>
                    <p className=''>{item.description}</p>
                </div>
                <div className='flex item-center space-x-2'>
                    <p className = "bold ">${item.discountedPrice} </p>
                    <p className='line-through '> ${item.price} </p>
                    <p className = "text-green-400">{item.discountPersent} off</p>

                </div>



            </div>

        </div>
    )
}
export default ProductCard
