import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "demo",
  authDomain: "demo",
  projectId: "demo-no-project",
  storageBucket: "demo-no-project.appspot.com",
  messagingSenderId: "123456",
  appId: "123456"
};

const app = initializeApp(firebaseConfig);

const functions = getFunctions(app);

// Connect to local emulator
connectFunctionsEmulator(functions, "127.0.0.1", 5001);

export { functions };