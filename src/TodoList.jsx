import React, { useState } from 'react';

function TodoList({ todos, deleteTodo }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const handleSave = (index) => {
    todos[index] = editValue;
    setEditIndex(null);
  };

  return (
    <>
      {todos.length === 0 ? (
        <p className="empty-message">No tasks available</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index} style={{ justifyContent: 'center' }}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => handleSave(index)} className="save">Save</button>
                </>
              ) : (
                <>
                  {todo}
                  <button onClick={() => handleEdit(index, todo)} className="edit">Edit</button>
                  <button onClick={() => deleteTodo(index)} className="complete">Complete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
