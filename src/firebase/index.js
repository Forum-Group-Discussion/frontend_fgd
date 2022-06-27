import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGFPxsdC9WG27iEahzW2nTcd9jW5zWAhk",
  authDomain: "forum-group-discussion.firebaseapp.com",
  projectId: "forum-group-discussion",
  storageBucket: "forum-group-discussion.appspot.com",
  messagingSenderId: "265198938924",
  appId: "1:265198938924:web:17595ccd48b8c2b6811a89",
};
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

export default storage;
