import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://689dc5e2ce755fe69789f10f.mockapi.io/customers"

const CustomerAdd = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [age, setAge] = useState<number>(0)
    const [error, setError] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    const navigate = useNavigate()

    const addCustomer = async () => {
        const customer = {
            name, 
            email,
            age
        }

        const validateEmail = (email: string) => 
            /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)

        if (name.trim().length == 0) {
            setError("Name Should not be blank!!")
            return;
        }

        if (!validateEmail(email)) {
            setError("❌ Invalid Email")
            return;
        }

        if (age < 18 || age > 100) {
            setError("Age must be between 18 and 100")
            return;
        }

        
        
        await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer),
        })
        
        setSuccess("Course Added Successfully!")
        setTimeout(() => navigate("/customers"), 1200)
    }



    return (
        <div className="container p-4">
            <div className="card p-5">

                <h1 className="mb-4 ">Add Customer</h1>
                {success && <p className="alert alert-success my-2">{success}</p>}
                {error && <p className="alert alert-danger my-2">{error}</p>}
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Please Enter Your Name!!"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                        
                    }}
                    />
            
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Please Enter Your Email!!"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" 
                    className="form-control" 
                    placeholder="Please Enter Your Age!!"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    />
                </div>

                <button className="btn btn-success"
                onClick={() => addCustomer()}
                >Add Customer</button>
            </div>
        </div>
    )

}

export default CustomerAdd;