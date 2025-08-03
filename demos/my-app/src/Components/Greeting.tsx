type GreetingProps = {
  name: string;
};
function Greeting(props: GreetingProps) {
  return <h2 className="text-secondary">Hello, {props.name}!</h2>;
}
export default Greeting;