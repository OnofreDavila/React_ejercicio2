import React, { useEffect, useState } from 'react';
import { firestore } from './firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import TaskItem from './TaskItem';

function TaskList() {
    const [productos, setProductos ] = useState([]);

    useEffect(()=> {
        const fetchTasks = async () => {
            console.log('Iniciando la obtención de tareas...');
            try {
                /*const snapshot = await firestore.collection('taks').get();
                const tasksData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setTasks(tasksData);*/
                const tasksCollection = collection(firestore, 'productos');
                const snapshot = await getDocs(tasksCollection);
                const tasksData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                if (tasksData.length > 0 ){
                    setProductos(tasksData);
                }
            } catch (error){
                console.error('Error al obtener los productos:', error);
            }
            
        };
        fetchTasks();
        }, []);

    const handleDelete = async (productoId) => {
        try {
            //Eliminar el producto de Firestore
            const productoDoc = doc(firestore, 'productos', productoId);
            await deleteDoc(productoDoc);
            setProductos(productos.filter((producto) => producto.id !== productoId));

            /*await firestore.collection('tasks').doc(taskId).delete();
            setTasks(tasks.filter((tasks) => tasks.id !== taskId));*/
        } catch (error) { 
            console.error('Error al eliminar el producto:', error ); 
        }
    };

    return (
        <div>
            {productos.length > 0 ? (
                <ul>
                    {productos.map((producto) => (
                        <TaskItem key={producto.id} producto={producto} onDelete={handleDelete} />
                    ))}
                </ul>
            ) : (
                <p>No hay productos.</p>
            )}
        </div> 
    );
}

export default TaskList;