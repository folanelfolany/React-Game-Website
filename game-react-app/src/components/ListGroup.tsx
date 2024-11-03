import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";

//Function to map list items to li element

function ListGroup() {
  let items = ["Cairo", "Alexandria", "Giza", "Luxor"];
  items= [];


  return (
    //Add key to each list item so that React can keep track of the items, item
    //itself is a unique identifier
    // Braces {} render anything dynamically
    // If true: "?" , otherwise: ":"
    <Fragment>
      <h1>Test List</h1>
      {items.length === 0 ? <p>No items in this list</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
