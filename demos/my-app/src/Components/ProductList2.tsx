import { useEffect, useState } from "react";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Number of products per page

  async function fetchProducts(): Promise<void> {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination calculations
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  function truncateText(text: string, maxLength: number): string {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  }

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container py-5">
      <div className="card p-4 bg-dark text-light shadow-lg border border-info">
        <h1 className="text-info mb-4">List of Products</h1>

        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search products by title..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to page 1 after search
          }}
        />

        {loading && (
          <div className="text-center my-4">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <div className="row g-4">
          {currentProducts.map((product) => (
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
          ))}

          {filteredProducts.length === 0 && !loading && (
            <div className="text-center text-warning fs-5 mt-4">
              No products match your search.
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}

export default ProductList2;
