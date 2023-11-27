import "./ProductCard.css"


const ProductCard = ({item}) => {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className=''>
                <img className='h-full w-full object-cover object-left-top '
                    src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"

                    alt=""/>



            </div>

            <div className='textPart bg-white p-3 '>
                <div>
                    <p className='font-bold opacity-60'> {item.brand}</p>
                    <p className=''>Causal pfff sleeves solde</p>
                </div>
                <div className='flex item-center space-x-2'>
                    <p className = "bold ">$30 </p>
                    <p className='line-through '> $100 </p>
                    <p className = "text-green-400">20% off</p>

                </div>



            </div>

        </div>
    )
}
export default ProductCard
