import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPosts(): Promise<void> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: Post[] = await response.json();
    setPosts(data);
  }

  return (
    <div className="container py-5">
      <div className="card p-4 bg-dark text-light shadow-lg border border-info">
        <h1 className="text-info mb-4">List of Posts from JSONPlaceholder</h1>

        {/* Styled Fetch Button */}
        <button
          className="mb-4"
          style={{
            backgroundColor: "#0dcaf0", // Bootstrap info color
            border: "none",
            padding: "0.5rem 1.2rem",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "0.3rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#31d2f2")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0dcaf0")
          }
          onClick={fetchPosts}
        >
          Fetch Posts
        </button>

        {/* Posts Grid */}
        <div className="row g-4">
          {posts.map(function (post, idx) {
            return (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 bg-secondary text-light shadow-sm border border-info">
                  <div className="card-body">
                    <h5 className="card-title text-warning">
                      {post.title.length > 50
                        ? post.title.slice(0, 50) + "..."
                        : post.title}
                    </h5>
                    <p className="card-text">
                      {post.body.length > 100
                        ? post.body.slice(0, 100) + "..."
                        : post.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PostList;
