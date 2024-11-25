import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../App";

export const loginRequest = (email, password) => {
  const signIn = signInWithEmailAndPassword(auth, email, password);
  return signIn;
};

export const registrationRequest = (email, password) => {
  const register = createUserWithEmailAndPassword(auth, email, password);
  return register;
};
