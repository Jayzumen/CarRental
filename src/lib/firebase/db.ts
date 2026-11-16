/**
 * Firestore. Only loaded on demand (booking + profile), never on first paint.
 */
import { getFirestore } from "firebase/firestore";
import { app } from "./app";

export const db = getFirestore(app);

export { addDoc, collection, getDocs, query, where } from "firebase/firestore";
