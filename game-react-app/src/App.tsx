import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.css";

//We want to create a div with our message component inside it.
function App() {
  // let items = ["Cairo", "Alexandria", "Giza", "Luxor"];

  // const handleSelectItem = (item: string) =>{
  //   console.log(item);
  // }

  return (
    <div>
      <Button onClick={() => console.log("clicked")}>Click me</Button>
    </div>
  );
}

export default App;
