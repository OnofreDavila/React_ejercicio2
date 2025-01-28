import React, { useState } from 'react';
import { db } from './firebase';


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { db } = require('./firebase');


const functions = require('firebase-functions');
const admin =require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.deleteTask = functions.https.onCall(async(database, context) => {
    const tareaId = database.tareaId;
    try {
        /*await db.collection('tareas').doc(tareaId).delete();*/
        await admin.firestore().collection('productos').doc(productoId).delete();
        return { success: true };
    } catch ( error ) {
        throw new functions.https.HttpsError('failed-precondition', 'Error al eliminar el producto del carrito');
    }
});