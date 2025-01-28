import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { firestore } from "./firebaseConfig";

function App() { 
    const [productos, setProductos] = useState([]);
    const [showForm, setShowForm] = useState(false);
    
    const addProducto = (producto) => {
        setProductos([...productos, producto]);
    };

    return (
        <>
          <button onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Ocultar formulario' : 'Agregar producto  '}
          </button>

          { showForm && <TaskForm addProducto = { addProducto } />} 

          <h2> Productos en Venta </h2>

          <TaskList productos = { productos } />

        </>
    );    
}

export default App;