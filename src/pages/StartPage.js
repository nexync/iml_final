import React from 'react';
import Button from 'react-bootstrap/Button';

import { useNavigate } from 'react-router-dom'

const StartPage = () => {
  const navigate = useNavigate()

  const handleGroup1 = () => {
    navigate("/group/1")
  }
  const handleGroup2 = () => {
    navigate("/group/2")
  }
  const handleGroup3 = () => {
    navigate("/group/3")
  }

  return (
    <div>
      <h1 style = {{width: 800, textAlign: 'center'}}>Interpretable Machine Learning Final Project<br/> </h1>
      <h3 style = {{width: 800, textAlign: 'center', marginBottom: 50}}>Jeff Cheng, Matt Nguyen, Krithika Ramesh, Phil Mathew<br/> </h3>
      <div className='start'>
        <Button variant='outline-light' className='groupChoice' onClick={handleGroup1}> Group 1 (Correct) </Button>
        <Button variant='outline-light' className='groupChoice' onClick={handleGroup2}> Group 2 (Random) </Button>
        <Button variant='outline-light' className='groupChoice' onClick={handleGroup3}> Group 3 (Control)</Button>
      </div>
      <h4 style = {{width: 400, textAlign: 'center', margin: "auto", marginTop: 30}}>
        Please read all passages and determine if the provided summary is factually consistent with the passage.
      </h4>
    </div>
  );
}

export default StartPage;