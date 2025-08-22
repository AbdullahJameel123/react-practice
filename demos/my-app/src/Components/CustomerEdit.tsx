import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"



interface Customer {
    id: string,
    name: string,
    email: string,
    age: number,
}

const API_URL = "https://689dc5e2ce755fe69789f10f.mockapi.io/customers"


function CustomerEdit() {
    const { id } = useParams<{ id: string }>();
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);

    const navigate = useNavigate()

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await fetch(`${API_URL}/${id}`)
                if (!response.ok) throw new Error("Failed to fetch Customer")
                const data = await response.json();
                setCustomer(data)
            } catch {
                setError("❌ Could not load customer details.")
            }
        }
        fetchCustomer()
    }, [id])

    const handleUpdate = async () => {
        if (!customer) return;
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(customer)
            })

            if (!response.ok) throw new Error("Failed to Update!!")

            setMessage("✅ Customer Updated Successfully!")
            setTimeout(() => {
                navigate("/customers")
            }, 1500);


        } catch {
            setError("❌ Sorry, Failed to update customer details.")
        }


    }
    if(error) return <p className="text-danger">{error}</p>
    if(!customer) return <p>Loading...</p>
    

    
    return (
        <div className="container py-5">
            <div className="card shadow-lg rounded-3 border-0">
                <div className="card-body p-4">

                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                        <h2 className="mb-0">✏️ Edit Customer</h2>

                        {message && <p className="alert alert-success py-2">{message}</p>}
                        {error && <p className="alert alert-danger py-2">{error}</p>}

                        <Link to="/customers">
                            <button className="btn btn-outline-secondary">
                                ← Back to List
                            </button>
                        </Link>
                    </div>

                    <form>
                        <div className="mb-3">
                            <label className="form-label fw-bold">Name</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light">
                                    <i className="bi bi-person"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter customer name"
                                    value={customer.name}
                                    onChange={(e) => 
                                        setCustomer({ ...customer, name: e.target.value})
                                    }
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Email</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light">
                                    <i className="bi bi-envelope"></i>
                                </span>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter customer email"
                                    value={customer.email}
                                    onChange={(e) => 
                                        setCustomer({ ...customer, email: e.target.value})
                                    }                                    
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label fw-bold">Age</label>
                            <div className="input-group">
                                <span className="input-group-text bg-light">
                                    <i className="bi bi-calendar"></i>
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter customer age"
                                    value={customer.age}
                                    onChange={(e) => 
                                        setCustomer({ ...customer, age: Number(e.target.value)})
                                    }                                    
                                />
                            </div>
                        </div>

                        <div className="d-flex gap-2 mt-4">
                            <button className="btn btn-primary px-4"
                                onClick={() => handleUpdate()}
                            >
                                💾 Update
                            </button>
                            <button type="reset" className="btn btn-outline-secondary px-4">
                                🔄 Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
    export default CustomerEdit;