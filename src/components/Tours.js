import Card from "./Card";

function Tours(props) {
  return (
      <div className="container">
        <div className="title">
          <h2>Tours Planning</h2>
        </div>
        <div className="cards">
          {props.tours.map((e) => {
            return <Card data = {e} remove_entry = {props.removedata}></Card>;
          })}
        </div>
      </div>
  );
}
export default Tours;

// Spread Operator ({...e}):

// When you use the spread operator, individual properties of the object are spread as separate props to the receiving component.
// In the receiving component (e.g., Card component), you can directly access the properties without referencing a specific prop name. For example: props.img, props.price, props.name, props.desc.
// Passing Entire Object (data={e}):

// When you pass the entire object as a prop, the entire object is available within the receiving component under the specified prop name (data in your case).
// In the receiving component, you need to reference the prop name to access the properties. For example: props.data.img, props.data.price, props.data.name, props.data.desc.