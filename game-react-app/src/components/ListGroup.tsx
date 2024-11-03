import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";

//Function to map list items to li element

function ListGroup() {
  let items = ["Cairo", "Alexandria", "Giza", "Luxor"];
  // items = [];

  return (
    //Add key to each list item so that React can keep track of the items, item
    //itself is a unique identifier
    // Braces {} render anything dynamically
    // If true: "?" , otherwise: ":"
    // If items.length is 0 first condition is true so &&  display "No items to display"
    <Fragment>
      <h1>Test List</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("clicked")}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
