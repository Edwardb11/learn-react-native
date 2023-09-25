import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2U5Lai9tMytLNhbRtS4r6vlGF_M1Sj0k",
  authDomain: "react-native-firebase-16457.firebaseapp.com",
  projectId: "react-native-firebase-16457",
  storageBucket: "react-native-firebase-16457.appspot.com",
  messagingSenderId: "108142499710",
  appId: "1:108142499710:web:aa8f7902ea8ce7f4b7852f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const AddUser = async (name, email, phone) => {
  try {
    const docRef = await addDoc(collection(db, "user"), {
      name: name,
      email: email,
      phone: phone,
    });
    console.log("Documento agregado con ID: ", docRef.id);
  } catch (error) {
    console.error("Error al agregar el documento: ", error);
  }
};

export const listUser = async () => {
  const users = [];
  try {
    const querySnapshot = await getDocs(collection(db, "user"));
    querySnapshot.forEach((doc) => {
      const { name, email, phone } = doc.data();
      users.push({ id: doc.id, name, email, phone });
    });
  } catch (error) {
    console.error("Error al listar usuarios: ", error);
  }
  console.log(users);
  return users;
};

export const getUserById = async (userId) => {
  try {
    const docRef = await getDoc(doc(db, "user", userId));
    if (docRef.exists()) {
      return docRef.data();
    } else {
      alert("User not found");
    }
  } catch (error) {
    console.error("Error al obtener el documento: ", error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await deleteDoc(doc(db, "user", userId));
    alert("User deleted");
  } catch (error) {
    console.error("Error al eliminar el documento: ", error);
  }
};

export const updateUser = async (userId, user) => {
  try {
    await updateDoc(doc(db, "user", userId), user);
    alert("User updated");
  } catch (error) {
    console.error("Error al actualizar el documento: ", error);
  }
};
