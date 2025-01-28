import React from 'react';
 
function TaskItem( { producto, onDelete, onCarrito } ) {
    return (
        <>
            <li>
                <h4>Nombre de producto:</h4>
                <h4> { producto.nombre } </h4>
                <h4>Nombre de la marca:</h4>
                <h4> { producto.marca } </h4>
                <br />
                <button onClick={() => onDelete(producto.id)}>Eliminar</button>
            </li>
        </>
    );
}

export default TaskItem;