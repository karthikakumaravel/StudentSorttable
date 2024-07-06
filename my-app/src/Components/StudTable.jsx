import React, { useState } from 'react';

function StudTable({ Students, setDeleteId, setEdit }) {
  const { id, name, avgmarks, cgpa } = Students;

  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...Students });

  const handleDelete = () => {
    setDeleteId(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setEdit(editedData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>{id}</td>
          <td><input name="name" value={editedData.name} onChange={handleChange} /></td>
          <td><input name="avgmarks" value={editedData.avgmarks} onChange={handleChange} /></td>
          <td><input name="cgpa" value={editedData.cgpa} onChange={handleChange} /></td>
          <td>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{id}</td>
          <td>{name}</td>
          <td>{avgmarks}</td>
          <td>{cgpa}</td>
          <td>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
}

export default StudTable;

