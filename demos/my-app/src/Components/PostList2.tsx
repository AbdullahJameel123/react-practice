import { useEffect, useState } from "react";

// Define the shape of a Post object returned from the API
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostList2 = () => {
  // State to hold the list of posts fetched from the API
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Shows loading spinner/text
    const [error, setError] = useState<string | null>(null); // Stores error message

  // Fetch posts from the JsonPlaceholder API and update state
  const fetchPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Error occurred while calling the API")
        }
        const data: Post[] = await response.json();
        setPosts(data);
    } catch (error: any) {
        setError(error.message)
    } finally {
        setLoading(false)
    }
      };
        

  // Fetch posts when the component mounts (runs only once)
  useEffect(() => {
    fetchPosts();
  }, []); // Empty dependency array ensures this runs only on mount

  if(loading) {
    return <h1 className="text-danger text-center">Loading...</h1>
  }

  if(error) {
    return <h1 className="text-danger text-center">{error}</h1>
  }

  return (
    <div className="container">
      {/* Page heading */}
      <h1 className="text-danger">
        List of Posts from JsonPlaceHolder (Version 2)
      </h1>
      {/* Render the list of posts */}
      <ul className="list-group m-3 p-3">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {/* Post title */}
            <h3 className="text-primary my-2">{post.title}</h3>
            {/* Post body */}
            <p className="text-secondary">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList2;