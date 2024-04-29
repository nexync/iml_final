import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Passage } from "../components/Passage.js"
import { Question } from '../components/Question.js';
import { AI } from '../components/AI.js'
import { Button } from 'react-bootstrap';

const ActionPage = ({passages, loading}) => {
  const { id } = useParams();

  const [passageIndex, setPassageIndex] = useState(0);
  const [highlight, setHighlight] = useState(false);

  let sortedPassages = passages.sort((a, b) => a["passageNum"] > b["passageNum"])

  const handleNext = () => {
    setPassageIndex(passageIndex+1)
  }

  const handlePrev = () => {
    setPassageIndex(passageIndex-1)
  }

  const showFeedback = () => {
    setHighlight(!highlight);
  }
  return (
    <div class = 'page'>
      <div class='container'>
        <div class ='passage-container'>
          {loading && "LOADING"}
          {passages && <Passage passageText={sortedPassages[passageIndex]["text"]} highlight={highlight} highlightIndices={sortedPassages[passageIndex]["text-highlight"]} />}
        </div>
        <div class ='question-container'>
          {loading && "LOADING"}
          {passages && <Question questionText={sortedPassages[passageIndex]["summary"]} questionNumber={passageIndex+1}/>}
          {id==="1" && <AI showFeedback={showFeedback} feedback={sortedPassages[passageIndex]["feedback"]} show={highlight}/> }
          <div className='question-nav'>
            <Button variant='outline-warning' onClick={handlePrev} disabled={passageIndex === 0}>Previous</Button> <Button variant='outline-warning' onClick={handleNext} disabled={passageIndex===passages.length-1}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActionPage;