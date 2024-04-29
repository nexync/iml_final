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
    <div style={{width: 500, textAlign: 'center'}}>
      <Button variant='outline-light' className='groupChoice' onClick={handleGroup1}> Group 1</Button>
      <Button variant='outline-light' className='groupChoice' onClick={handleGroup2}> Group 2</Button>
      <Button variant='outline-light' className='groupChoice' onClick={handleGroup3}> Group 3</Button>
    </div>
  );
}

export default StartPage;