import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import data from '../data.json';
import './Warehouselist.css'

function Warehouselist() {
  const { id } = useParams();

  const warehouse = data.find((item) => item.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(warehouse.name);

  if (!warehouse) {
    return <div>Warehouse not found</div>;
  }
  const handleEditClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleSaveName = () => {
    warehouse.name = editedName;
    setIsModalOpen(false);
  };

  return (
    <div className="list">
      <h1>Warehouse Details</h1>
      <p>ID: {warehouse.id}</p>
      <p>Name: {warehouse.name}</p>
      <p>Code: {warehouse.code}</p>
      <p>City: {warehouse.city}</p>
      <p>Type: {warehouse.type}</p>
      <p>Space Available: {warehouse.space_available}</p>
      <p>Cluster: {warehouse.cluster}</p>
      <button onClick={handleEditClick}>Edit</button>

    
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Edit Warehouse"
      >
        <h2>update name</h2>
        <label >
          
          <input
            type="text"
            value={editedName}
            onChange={handleNameChange}
          />
        </label>
        <button className='edit'onClick={handleSaveName}>edit</button>
        <button className='close'onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
}

export default Warehouselist;