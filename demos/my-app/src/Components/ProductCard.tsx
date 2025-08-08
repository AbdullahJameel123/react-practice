type ProductCardProps = {
  title: string;
  price: number;
  description: string;
};

function ProductCard({ title, price, description }: ProductCardProps) {
    return (
        <div className="card h-100 bg-dark text-light shadow-sm border border-info">
            <div className="card-body">
                <div className="card-title text-info">{title}</div>
                <p className="card-text">
                    <strong>Price:</strong> ${price}
                </p>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-info">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;