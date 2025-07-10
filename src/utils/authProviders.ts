import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export { googleProvider };
