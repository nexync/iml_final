import React, { useState, useEffect } from 'react'

import { Form } from 'react-bootstrap'


export const Question = ({questionText, questionNumber, setResponse, responses, highlight, highlightIndices}) => {
	const [good, setGood] = useState(null);

	const handleSelect = (value) => {
		setGood(value);
		setResponse(questionNumber, value);
	}

	useEffect(() => {
		setGood(responses[questionNumber-1]);
	  }, [questionNumber, responses]);

	
	let sortedHighlight = Object.values(highlightIndices).sort((a,b) => a[0] - b[0] > 0)

	const colorText = (text, indices) => {
		let result = []
		let lastIndex = 0;

		indices.forEach(([start, end]) => {
			result.push(text.substring(lastIndex, start));
			result.push(<span style={{color: 'yellow' }}>{text.substring(start, end)}</span>)
			lastIndex=end
		})

		result.push(text.substring(lastIndex));

		return result
	}
	
	return (
	<div className='question-box'>
		<div>Passage Number {questionNumber}</div> 
		<hr/>
		<div className='question'>
			<div style={{marginBottom: "10px"}}>{highlight ? colorText(questionText, sortedHighlight) : questionText}</div>
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
