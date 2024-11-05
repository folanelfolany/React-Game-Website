import { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

//Function to map list items to li element

// {items : [], heading: string}
//This helps us make the lists dynamic, including the ehading and the list itself
interface Props {
  items: string[];
  heading: string;
  // (iten: string) => void
  onSelectItem: (item:string) => void;
}

//Give the listgroup prop paramters
//Destructuring paramters to give access to items and headings
function ListGroup({ items, heading, onSelectItem }: Props) {
  // let selectedIndex = 0;
  //We want to say that this variable can change its state, so we use useState
  //This is a HOOK - a state hook
  //-1 means nothing is selected
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //Variable to handle clicking, always keep logic outside of direct function
  // The event is passed as a parameter here ()
  //Specify type of event paramter, MouseEvent in this case
  // EVENT HANDLER
  return (
    //Add key to each list item so that React can keep track of the items, item
    //itself is a unique identifier
    // Braces {} render anything dynamically
    // If true: "?" , otherwise: ":"
    // If items.length is 0 first condition is true so &&  display "No items to display"
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items to display</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
