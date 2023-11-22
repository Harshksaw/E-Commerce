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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-8xl mx-auto space-x-10 space-y-5 min-h-[80vh] ">
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
