import React, { useState, useEffect } from 'react'

import { Form } from 'react-bootstrap'


export const Question = ({questionText, questionNumber, setResponse, responses}) => {
	const [good, setGood] = useState(null);

	const handleSelect = (value) => {
		setGood(value);
		setResponse(questionNumber, value);
	}

	useEffect(() => {
		setGood(responses[questionNumber-1]);
	  }, [questionNumber, responses]);
	
	return (
	<div className='question-box'>
		<div>Passage Number {questionNumber}</div> 
		<hr/>
		<div className='question'>
			<div style={{marginBottom: "10px"}}>{questionText}</div>
		</div>
		<hr/>
		<div>
			<div style = {{marginBottom: 10}}> Is the above passage a good summary of the document on the left? </div>
			<Form id="myform"> 
				<Form.Group>
					<Form.Check
						checked={good===true}
						name={"choices"+questionNumber}
						type="radio"
						id={"radio" + 0}
						label="Yes"
						onChange={() => handleSelect(true)}
					/>
					<Form.Check
						checked={good===false}
						name={"choices"+questionNumber}
						type="radio"
						id={"radio" + 1}
						label="No"
						onChange={() => handleSelect(false)}
					/>
				</Form.Group>
			</Form>
		</div>	
	</div>
)
}
