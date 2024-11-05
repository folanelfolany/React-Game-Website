import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
//We want to create a div with our message component inside it.
function App() {
  // let items = ["Cairo", "Alexandria", "Giza", "Luxor"];

  // const handleSelectItem = (item: string) =>{
  //   console.log(item);
  // }
  useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      {showAlert&&<Alert onClose={()=> setShowAlert(false)}>"Hi"</Alert>}
      <Button color="primary" onClick={()=> setShowAlert(true)}>
        "Hello"
      </Button>
      
    </div>
  );
}

export default App;


