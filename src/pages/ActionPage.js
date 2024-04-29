import React from 'react';
import { useParams } from 'react-router-dom';
import { Passage } from "../components/Passage.js"
import { Question } from '../components/Question.js';

const ActionPage = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div class = 'page'>
      <div class='container'>
        <div class ='passage-container'>
          <Passage/>
        </div>
        <div class ='question-container'>
          <Question/>
        </div>
      </div>
    </div>
  );
}

export default ActionPage;