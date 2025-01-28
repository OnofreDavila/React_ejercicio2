import React, { useState } from 'react';
import axios from 'axios';
import { firestore } from './firebaseConfig';
import SimpleReactValidator from "simple-react-validator";
import { collection, addDoc } from 'firebase/firestore';

function TaskForm( { addProducto }) {
    
    const [producto, setProducto] = useState( { nombre: '', marca: '' } );
    const [validator] = useState(new SimpleReactValidator());

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            
            //simulacion de solicitud HTTP con axios
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            const additionalData = response.data;

            const newProducto = { ...producto, additionalInfo: additionalData.title };
            //Agregar el proyecto a Firestore
            const docRef = await addDoc(collection(firestore, 'productos'), newProducto);
            addProducto({ id: docRef.id, ...newProducto });
            setProducto({ nombre: '', marca: '' }); //limpiamos el formulario
        } else {
            validator.showMessages();
        } 
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Añade un producto al listado</label>
            </div>
            <div>
                <label>Nombre:</label>
                <input 
                type="text"
                name="nombre"
                value={producto.nombre}
                onChange={handleChange}
                placeholder="Nombre del producto" 
                />
                {validator.message('nombre', producto.nombre, 'required|alpha')}
            </div>
            <div>
                <label>Marca:</label>
                <input 
                    type="text"
                    name="marca" 
                    value={producto.marca}
                    onChange={handleChange}
                    placeholder='Marca del producto'
                />
                {validator.message('marca', producto.marca, 'required|alpha')}
            </div>           
            <button type='submit'>Agregar producto.</button>
        </form>
    );
}

export default TaskForm;