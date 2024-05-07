import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import ActionPage from './pages/ActionPage';
import FinishPage from './pages/FinishPage'
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

const addPassage = (obj) => {
  var id = "id" + Math.random().toString(16).slice(2)
  firestore.collection("passages").doc(id).set({...obj, ...{"id": id}})
}

const submitUser = (obj) => {
  var id = "user" + Math.random().toString(16).slice(2)
  firestore.collection("users").doc(id).set({...obj, ...{"id": id}})
}

function App() {
  const passageRef = firestore.collection('passages')
  const [passages] = useCollectionData(passageRef, {idField: 'id'})

  const [content, setContent] = useState([])

  useEffect(()=> {
    if (passages) {
      let sortedPassages = passages.sort((a, b) => a["passageNum"] > b["passageNum"])
      setContent(sortedPassages)
    }
  }, [passages])
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/group/:id" element={<ActionPage passages={content} />} />
        <Route path="/finish" element={<FinishPage submitUser={submitUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;
