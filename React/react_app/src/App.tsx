import Message from "./Message";
import ListGroup from "./components/ListGroup";
//import { Fragment } from "react";
import { MouseEvent, useState } from "react";

function App() {
  //return <div><Message></Message></div>

  let items = ["New york", "Washington", "Korean", "India", "Singapore"];
  let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  arr[0]; //variable (selectedIndex)
  arr[1]; // undater function

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event)

  //only HTML or react component
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
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
              selectedIndex = index;
            }}
          >
            {item}
          </li> //key for uniquely identifies that item
        ))}
      </ul>
    </>
  );
}

//can use somewhere else
export default App;
