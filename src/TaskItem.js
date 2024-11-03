import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const TaskItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="task-edit">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <>
          <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
          <div className="task-icons">
            <FaEdit onClick={() => setIsEditing(true)} />
            <FaTrash onClick={() => deleteTask(task.id)} />
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
