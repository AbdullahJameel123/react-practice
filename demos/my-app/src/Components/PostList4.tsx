import { useEffect, useState } from "react";

// Define the shape of a Post object returned from the API
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const RECORDS_PER_PAGE: number = 8;

const PostList4 = () => {
  // State to hold the list of posts fetched from the API
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Shows loading spinner/text
  const [error, setError] = useState<string | null>(null); // Stores error message
  

  const [currentPage, setCurrentPage] = useState<number>(1);

  // Fetch posts from the JsonPlaceholder API and update state
  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Error occurred while calling the API");
      }
      const data: Post[] = await response.json();
      setPosts(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts when the component mounts (runs only once)
  useEffect(() => {
    fetchPosts();
  }, []); // Empty dependency array ensures this runs only on mount

  const totalPosts: number = posts.length;
  const totalPages: number = Math.ceil(totalPosts / RECORDS_PER_PAGE);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const startIndex: number = (currentPage - 1) * RECORDS_PER_PAGE;
  const endIndex: number = startIndex + RECORDS_PER_PAGE;
  const paginatedPosts: Post[] = posts.slice(startIndex, endIndex);

  if (loading) {
    return <h1 className="text-danger text-center">Loading...</h1>;
  }

  if (error) {
    return <h1 className="text-danger text-center">{error}</h1>;
  }

  return (
    <div className="container py-5">
      <div className="card p-4 border">
        {/* Page heading */}
        <h1 className="text-danger mb-5">Posts (with Pagination)</h1>
        {/* Render the list of posts */}
        <div className="row g-4">
          {paginatedPosts.map((post) => (
            <div className="col-md-3 mb-3" key={post.id}>
              <div className="card h-100 d-flex flex-column">
                <img src={`https://picsum.photos/id/${post.id}/300`} alt="" />
                <div className="card-body d-flex flex-column">
                  {/* Post title */}
                  <h4 className="card-title text-danger">{post.title}</h4>
                  {/* Post body */}
                  <p className="card-text text-secondary">{post.body}</p>
                  {/* Spacer to push button to the bottom */}
                  <div className="flex-grow-1">&nbsp;</div>
                  {/* Link button aligned at the bottom of the card */}
                  <a href="" className="btn btn-primary">
                    View Entire Post
                  </a>
                </div>
                {/* Card footer with author info */}
                <div className="card-footer text-muted">
                  Author - {post.userId}
                </div>
              </div>
            </div>
          ))}

      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={currentPage == 1 ? "d-none" : ""}>
            <button
              className="page-link"
              onClick={() => {
                setCurrentPage(currentPage - 1);
                window.scrollTo({ top: 1 });
              }}
            >
              Previous
            </button>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li className={currentPage == pageNumber ? "active" : "page-item"}>
              <button
                className={"page-link"}
                onClick={() => {
                  setCurrentPage(pageNumber);
                  window.scrollTo({ top: 0 });
                }}
                >
                {pageNumber}
              </button>
            </li>
          ))}
          <li className={currentPage == totalPages ? "d-none" : ""}>
            <button
              className="page-link"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                window.scrollTo({ top: 1 });
              }}
              >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
              </div>
            </div>
  );
};

export default PostList4;
