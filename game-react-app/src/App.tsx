import ListGroup from "./components/ListGroup";
import "bootstrap/dist/css/bootstrap.css";

//We want to create a div with our message component inside it.
function App() {
  let items = ["Cairo", "Alexandria", "Giza", "Luxor"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
