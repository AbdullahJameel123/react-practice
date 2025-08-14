import { useState } from "react";

type Item = {
    id: number;
    title: string;
    description: string;
    category: string;
    thumbnail: string;
};

const SearchPage = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fetchItems = async (searchTerm: string) => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await response.json();
        setItems(data.products || data.posts || data.users || []);
    };

    return (
        <div className="container py-4">
            <h1>Search Items</h1>

            <div className="mb-4 d-flex">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter search term..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                    className="btn btn-primary ms-2"
                    onClick={() => fetchItems(searchTerm)}
                >
                    Search
                </button>
            </div>

            <div className="row">
                {items.map((item) => (
                    <div className="col-md-4 mb-3" key={item.id}>
                        <div className="card h-100">
                            <img src={(item as any).thumbnail} alt={item.title} className="card-img-top" />

                            <div className="card-body">
                                <h5 className="card-title">{item.title || item.category}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;