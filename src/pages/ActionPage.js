import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Passage } from "../components/Passage.js"
import { Question } from '../components/Question.js';
import { AI } from '../components/AI.js'

import { Button } from 'react-bootstrap';

const ActionPage = ({passages}) => {
  const { id } = useParams();

  const [passageIndex, setPassageIndex] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [answers, setAnswers] = useState(new Array(passages.length).fill(null))

  const handleNext = () => {
    setHighlight(false)
    setPassageIndex(passageIndex+1)
  }

  const handlePrev = () => {
    setHighlight(false)
    setPassageIndex(passageIndex-1)
  }

  const showFeedback = () => {
    setHighlight(!highlight);
  }

  const setResponse = (questionNumber, value) => {
    const newAnswers = [...answers]
    newAnswers[questionNumber-1] = value;
    setAnswers(newAnswers)
  }

  return (
    <div class = 'page'>
      {passages.length!==0 ?
        <div class='container'>
          <div class ='passage-container'>
            <Passage 
              passageText={passages[passageIndex]["text"]} 
              highlight={highlight} 
              highlightIndices={id==="1" ? passages[passageIndex]["text-highlight"] : passages[passageIndex]["summary-highlight"]} 
            />
          </div>
          <div class ='question-container'>
            <Question 
              questionText={passages[passageIndex]["summary"]} 
              questionNumber={passageIndex+1} 
              setResponse={setResponse} 
              responses={answers} 
            />
            <AI 
              id={id}
              showFeedback={showFeedback} 
              feedback={id === "1" ? passages[passageIndex]["feedback"] : passages[passageIndex]["random-feedback"]} 
              show={highlight}
            />
            <div className='question-nav'>
              <Button variant='outline-warning' onClick={handlePrev} disabled={passageIndex === 0}>Previous</Button> 
              {passageIndex===passages.length-1 ? <Button className='submit' onClick={() => {console.log(answers)}}>                
                <Link to='/finish' state={{answers: answers}}>
                  Submit
                </Link>
              </Button> : <Button variant='outline-warning' onClick={handleNext} >Next</Button> }
            </div>
          </div> 
        </div> : 
        // this part is for when nothing has loaded yet
        <div class='container'>
          <div class ='passage-container'>
            <Passage 
              passageText={"Loading"} 
              highlight={highlight} 
              highlightIndices={{}} 
            />
          </div>
          <div class ='question-container'>
            <Question 
              questionText={"Loading"} 
              questionNumber={passageIndex+1} 
              setResponse={setResponse} 
              responses={answers} 
              highlightIndices={{}} 
            />
            <AI 
              id={id}
              showFeedback={showFeedback} 
              feedback={false} show={false}
            />
            <div className='question-nav'>
              <Button variant='outline-warning' onClick={handlePrev} disabled={passageIndex === 0}>Previous</Button> {passageIndex===passages.length-1 ? <Button variant='outline-success'>
                Submit
              </Button> : <Button variant='outline-warning' onClick={handleNext} >Next</Button> }
            </div>
          </div> 
        </div>      
      }
    </div>
  );
}

export default ActionPage;

//