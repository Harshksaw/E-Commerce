

export default function Product({post}) {
  return (
    <div>

        <div>

            <p>{post.title}</p>

        </div>
        <div>
            {post.description}
        </div>
        <div>
            {post.price}
        </div>
        <div>
            <img src={`${post.image}`} />
        </div>
        <div>
            <button>
                {selected ? <p>Remove Item</p> : <p>Add to cart</p> }
            </button>
        </div>
      
    </div>
  )
}
