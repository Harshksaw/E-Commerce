import { useEffect, useState } from "react"
import Spinner from "../components/Spinner"



export default function Home() {
    const API_URl = "https://fakestoreapi.com/products"
  const [loading , setloading] = useState(false)
  const [posts, setposts ] = useState([])

  async function fetchProductData(){
    setloading(true)
    try {

      const response = await fetch(API_URl)
      const data = await response.json()
      console.log(data,"data");

      setposts(data)

      
      
    } catch (error) {
      console.log(error,"loading failed");
      
    }
    setloading(false)


  }

  useEffect(()=>{
    fetchProductData()
  },[])







  return (
    <div>



      {loading ? <Spinner/> :
      posts.length > 0 ?  
      (
        <div className= "flex flex-col justify-center item-center">
            {posts.map((post) => 
            (
              <div key = {post.id}>
                <h1>{post.title}</h1>
                {/* <img src={post.image} */}
                <p>{post.description}</p>
                
              
              </div>
              
            ))}

        </div>
      ) : 
      <div><p>NO Posts</p></div>
      
    
      }
      
    </div>
  )
}
