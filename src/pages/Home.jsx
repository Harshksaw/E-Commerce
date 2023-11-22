import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

export default function Home() {
  const API_URl = "https://fakestoreapi.com/products";
  const [loading, setloading] = useState(false);
  const [posts, setposts] = useState([]);

  async function fetchProductData() {
    setloading(true);
    try {
      const response = await fetch(API_URl);
      const data = await response.json();
      console.log(data, "data");

      setposts(data);
    } catch (error) {
      console.log(error, "loading failed");
    }
    setloading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? 
        <Spinner />
       : posts.length > 0 ? (
        <div className="flex flex-col justify-center item-center">
          {posts.map((post) => (
           <Product key={post.id} post = {post}/>
          ))}
        </div>
      ) : (
        <div>
          <p>NO Posts</p>
        </div>
      )}
    </div>
  );
}
