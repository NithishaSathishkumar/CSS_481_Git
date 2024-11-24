import { useState } from "react";
import "./App.css";

function TodoList() {
   
   // State to track the current task input value
   const [task, setTask] = useState("");

   // State to store the list of task items
   const [taskItems, setTaskItems] = useState([]);

   // Function to handle adding a new task
   function addItem(event) {
        event.preventDefault(); // Prevent the default form submission behavior
    
        // Only add the task if it is not empty or just spaces
        if (task.trim() !== "") {
            const newItem = {
                key: Date.now(), // Unique key for each task using the current timestamp
                text: task // The task text
            };

            // Add the new task to the existing list of tasks
            setTaskItems(prevItems => [...prevItems, newItem]);

            // Clear the input field after adding the task
            setTask("");
        }

        // Automatically refocus on the task input field
        event.target.task.focus();
   }
    
    // Function to delete a task based on its unique key
    function deleteItem(key) {
        // Filter out the task with the matching key
        setTaskItems(
            prevItems => prevItems.filter(item => item.key !== key)
        );
    }

   return (
        <>
            <h1>Todo List</h1>
            <form onSubmit={addItem}>
                <label htmlFor="task">Task?</label>&nbsp;
                <input> // Update task state on input change
                    id="task" 
                    type="text" 
                    autoFocus 
                    value={task} 
                    onChange={
                        (e) => setTask(e.target.value)
                    } 
                </input>
                &nbsp;
                <button type="submit">Add</button> /* Button to submit the form */
            </form>

            /* Component to display the list of tasks */
            <TodoItems 
                items={taskItems} // Pass the list of tasks as props
                delete={deleteItem} // Pass the delete function as a prop
            />
      </>
   );
}

function TodoItems(props) {

    // Get the list of tasks from the props
    const todoItems = props.items;
    
    /* Map over the list of tasks to render each one */
    return (
        <ol>
            {todoItems.map((item) =>
                <li key={item.key}>
                    /* Display the task text */
                    {item.text} &nbsp;

                    /* Button to delete the task, calls the delete function with the task's key */
                    <button onClick={() => props.delete(item.key)}>done</button>
                </li>
            )}
        </ol>
    );
}

function App() {
    // Render the main TodoList component
    return <TodoList />;
}

export default App;