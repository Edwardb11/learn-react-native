import { getFirestore, collection, addDoc } from "firebase/firestore";
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
