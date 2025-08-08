import ProductCard from "./ProductCard";

function ProductList() {
    const products = [
  {
    title: "Laptop",
    price: 55000,
    description: "A powerful machine for professionals.",
  },
  {
    title: "Smartphone",
    price: 25000,
    description: "A sleek and modern smartphone.",
  },
  {
    title: "Headphones",
    price: 3000,
    description: "Noise-cancelling over-ear headphones.",
  },
];

    return (
        <div className="container py-5">
            <div className="card p-4 bg-dark text-light shadow-lg border border-info">
                <h1 className="mb-4 text-info">Available Products</h1>
                <div className="row g-4">
                    {products.map((product, idx) => (
                        <div className="col md-4" key={idx}>
                            <div className="card h-100 bg-secondary text-light shadow-sm border border-info">
                                <div className="card-body">
                                    <ProductCard
                                        title={product.title}
                                        price={product.price}
                                        description={product.description}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

export default ProductList;
