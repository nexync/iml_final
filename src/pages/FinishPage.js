import React, {useState} from 'react'
import { Form, Button} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const FinishPage = ({submitUser}) => {
  const location = useLocation();
  const navigate = useNavigate()
  const state = location.state

  const [survey, setSurvey] = useState(new Array(3).fill(-1))

  const choices = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
  const questions = ["Question 1", "Question 2", "Question 3"]

  const handleClick = () => {
    let obj = {
      answers: state,
      survey: survey,
    }
    submitUser(obj);
    navigate("/")
  }
  return (
    <div style = {{width: 1000, textAlign: 'center', alignContent: 'center'}}>
      <h2 style = {{margin: 'auto'}}>Exit Survey</h2>
      <Form>
        {questions.map((question, i) => (
          <>
            <Form.Label>{question}</Form.Label>
            <div className='radio'>
              {choices.map((choice, index) => (
                <Form.Check
                  inline
                  label={choice}
                  name={`question${i}`}
                  type="radio"
                  id={`radio-${i}-${index}`}
                  checked={survey[i]===index}
                  onClick={() => {
                    let newArr = [...survey]
                    newArr[i] = index;
                    setSurvey(newArr)
                  }}
                />
              ))}
            </div>
          </>
        ))}
        <Button variant="success" onClick={handleClick} >
          Submit Responses
        </Button>
      </Form>
    </div>
);
}

export default FinishPage