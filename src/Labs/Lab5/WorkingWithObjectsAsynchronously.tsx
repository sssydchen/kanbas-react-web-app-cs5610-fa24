import React, { useEffect, useState } from "react";
import * as client from "./client";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function WorkingWithObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<any>({});
  const [todos, setTodos] = useState<any[]>([]);

  const fetchAssignment = async () => {
    const assignment = await client.fetchAssignment();
    setAssignment(assignment);
  };
  const updateTitle = async (title: string) => {
    const updatedAssignment = await client.updateTitle(title);
    setAssignment(updatedAssignment);
  };
  const fetchTodos = async () => {
    const todos = await client.fetchTodos();
    setTodos(todos);
  };

  const removeTodo = async (todo: any) => {
    const updatedTodos = await client.removeTodo(todo);
    setTodos(updatedTodos);
  };
  const createTodo = async () => {
    const todos = await client.createTodo();
    setTodos(todos);
  };
  const postTodo = async () => {
    const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = async (todo: any) => {
    await client.deleteTodo(todo);
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };


  useEffect(() => {
    fetchAssignment();
    fetchTodos();
  }, []);


  return (
    <div>
      <div id="wd-asynchronous-objects">
        <h3>Working with Objects Asynchronously</h3>
        <h4>Assignment</h4>
        <input defaultValue={assignment.title} className="form-control mb-2"
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
        <textarea defaultValue={assignment.description} className="form-control mb-2"
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} />
        <input type="date" className="form-control mb-2" defaultValue={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })} />
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="wd-completed"
            defaultChecked={assignment.completed}
            onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
          <label className="form-check-label" htmlFor="wd-completed"> Completed </label>
        </div>
        <button className="btn btn-primary me-2" onClick={() => updateTitle(assignment.title)} >
          Update Title
        </button>
        <pre>{JSON.stringify(assignment, null, 2)}</pre>
        <hr />
      </div>

      <div id="wd-asynchronous-arrays">
        <h3>Working with Arrays Asynchronously</h3>
        <h4>Todos
          <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
            id="wd-create-todo" />
          <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
        </h4>
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item">
              <FaTrash onClick={() => removeTodo(todo)}
                className="text-danger float-end mt-1" id="wd-remove-todo" />
                <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />
              <input type="checkbox" className="form-check-input me-2"
                defaultChecked={todo.completed} />
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </span>
            </li>
          ))}
        </ul> <hr />
      </div>
    </div>
  );
}
