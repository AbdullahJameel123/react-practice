import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Customers = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const CustomerList = () => {
  const API_URL = "https://689dc5e2ce755fe69789f10f.mockapi.io/customers";
  const [customers, setCustomers] = useState<Customers[]>([]);

  const fetchCustomers = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  });

  async function deleteCustomer(id: number) {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <div className="container py-5">
      <div className="card">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
            <h1>Customer List</h1>
            <Link to="/customers/add" className=" d-flex align-items-center">
              <button className="btn btn-success d-flex align-items-center">
                Add Customer
              </button>
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Age</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.age}</td>
                    <td>
                      {
                        <div className="d-flex justify-content-center gap-2">
                          <Link
                            to={`/customers/edit/${customer.id}`}
                            className="btn btn-primary"
                          >
                            Edit
                          </Link>

                          <button
                            className="btn btn-danger"
                            onClick={() => deleteCustomer(customer.id)}
                          >
                            Delete
                          </button>
                        </div>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CustomerList;
