function EmployeeTable() {
        const employees = [
            { id: 1, name: "Alice", department: "HR", designation: "Manager", salary: 60000 },
            { id: 2, name: "Bob", department: "IT", designation: "Developer", salary: 70000 },
            { id: 3, name: "Charlie", department: "Finance", designation: "Analyst", salary: 65000 },
        ];
    return (
        <div className="container m-2">
        <h2>Employee List</h2>  
        <table className="table table-dark table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
}

export default EmployeeTable;