import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import ActionPage from './pages/ActionPage';
import Admin from './pages/Admin'

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCPAGm2W3u-Sw5b-sjUw0z1lgVFY9pvRz4",
  authDomain: "qa-userstudy.firebaseapp.com",
  projectId: "qa-userstudy",
  storageBucket: "qa-userstudy.appspot.com",
  messagingSenderId: "563624593276",
  appId: "1:563624593276:web:994c7f9c22e460093646f9"
});

const firestore = firebase.firestore()

function App() {
  const passageRef = firestore.collection('passages')
  const [passages, loading] = useCollectionData(passageRef, {idField: 'id'})

  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/group/:id" element={<ActionPage passages={passages} loading={loading} />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;
