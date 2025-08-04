type EmployeeCardProp = {
    name: string;
    designation: string;
    department: string;
    salary: number;
}

function EmployeeCard(props: EmployeeCardProp) {
    return (
        <div className="card p-2 m-2">
            <h4 className="card-title">{props.name}</h4>
            <p className="card-content">{props.designation}</p>
            <h5 className="text-danger">{props.department}</h5>
            <h5 className="text-success">{props.salary}</h5>
        </div>
    )
}
export default EmployeeCard;