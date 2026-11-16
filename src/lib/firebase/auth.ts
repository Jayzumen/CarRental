/**
 * Firebase Auth. Import this module dynamically from client code
 * (`await import("@/lib/firebase/auth")`) so the SDK stays out of the
 * critical JavaScript bundle and loads after hydration.
 */
import { getAuth } from "firebase/auth";
import { app } from "./app";

export const auth = getAuth(app);

export {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
