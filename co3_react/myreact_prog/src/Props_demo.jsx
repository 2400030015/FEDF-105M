function Greeting(props) 
{
  return <h2>Hello, {props.name}!</h2>;
}

function Props_demo() {
  return (
    <div>
      <Greeting name="Venki" />
      <Greeting name="Ravi" />
    </div>
  );
}
export default Props_demo;