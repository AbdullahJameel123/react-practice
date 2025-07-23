function Greet() {
    let name = ""
    if (name) {
        return <h1 className="greet">Hello, {name}!</h1>;
    }
    else {
        return <h1 className="greet">Hello, Guest!</h1>;
    }
}

export default Greet;