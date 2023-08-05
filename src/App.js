import { useState } from "react";
import "./styles.css";
import ToDo from "./ToDo";
const App = () => {
  const [list, setList] = useState("");
  const [items, setItems] = useState([]);
  const changeEvent = (event) => {
    setList(event.target.value);
  };

  const add = () => {
    setItems((oldItems) => {
      return [...oldItems, list];
    });
    setList("");
  };
  const deleteItem = (id) => {
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrEl, ind) => {
        return ind !== id;
      });
    });
  };
  return (
    <>
      <div className="App">
        <h1>ToDo List</h1>
        <div className="input">
          <input placeholder="Add Items" onChange={changeEvent} value={list} />
          <button className="plus" onClick={add}>
            +
          </button>
        </div>
        <div className="list">
          <ul>
            {items.map((itemval, index) => {
              return (
                <ToDo
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
