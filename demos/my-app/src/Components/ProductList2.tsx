import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

function ProductList2() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState(""); // search state
  const [loading, setLoading] = useState(false); // loading state

  async function fetchProducts(): Promise<void> {
    setLoading(true); // start loading
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false); // done loading
    }

  }
  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  function truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  return (
    <div className="container py-5">
      <div className="card p-4 bg-dark text-light shadow-lg border border-info">
        <h1 className="text-info mb-4">List of Products</h1>
        <button
          className="mb-4"
          style={{
            backgroundColor: "#0dcaf0",
            border: "none",
            padding: "0.5rem 1.2rem",
            color: "#000",
            fontWeight: "bold",
            borderRadius: "0.3rem",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#31d2f2")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#0dcaf0")
          }
          onClick={fetchProducts}
          disabled={loading} // disable button during loading
        >
          {loading ? "Loading..." : "Fetch Products"}
        </button>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search products by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {loading && (
          <div className="text-center my-4">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <div className="row g-4">
          {filteredProducts.slice(0, 10).map(function (product) {
            return (
              <div className="col-md-4" key={product.id}>
                <div className="card h-100 bg-secondary text-light shadow-sm border border-info d-flex flex-column">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top mx-auto mt-3"
                    style={{
                      height: "200px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-warning">
                      {truncateText(product.title, 50)}
                    </h5>
                    <p className="card-text fst-italic text-info mb-2">
                      Category: {product.category}
                    </p>
                    <p className="card-text flex-grow-1">
                      {truncateText(product.description, 100)}
                    </p>
                    <p className="card-text fw-bold fs-5 mt-3">
                      Price:{" "}
                      <span className="text-info">
                        ${product.price.toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredProducts.length === 0 && !loading && (
  <div className="text-center text-warning fs-5 mt-4">
    No products match your search.
  </div>
)}

        </div>
      </div>
    </div>
  );
}

export default ProductList2;
