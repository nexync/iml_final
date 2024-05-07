import React from 'react'

import {Button, Tooltip, OverlayTrigger} from 'react-bootstrap'
import { useState } from 'react'

export const AI = ({showFeedback, feedback, show, id}) => {
	const [typedText, setTypedText] = useState('')
	const [typingIntervalId, setTypingIntervalId] = useState(null)
	const speed = 30;
	const textToType = feedback ? "Evidence suggests the summary is consistent with the article. See highlighted sections." : "Evidence suggests the summary is not consistent with the article. See highlighted sections."

	const renderTooltip = (props) => (
		<Tooltip id="button-tooltip" {...props}>
			Show AI explanations and feedback
		</Tooltip>
	);

	const handleClick = () => {
		// Clear old text
		setTypedText('');

		// Clear previous intervals
		if (typingIntervalId) {
			clearInterval(typingIntervalId);
		}
	
		let currentIndex = 0;
		let currentText = ''; // Local variable to accumulate text
	
		const intervalId = setInterval(() => {
			if (currentIndex < textToType.length) {
				currentText += textToType.charAt(currentIndex); // Append to local string
				currentIndex++;
	
				// Update state with current text
				setTypedText(currentText);
			} else {
				clearInterval(intervalId);
			}
		}, speed);
	
		// Save the interval ID so it can be cleared if needed
		setTypingIntervalId(intervalId);
		showFeedback(); // Trigger feedback showing
	}

	return (
	<div className={`question-ai ${id === '3' ? 'hidden' : ''}`}>
		<OverlayTrigger placement="left" delay={{ show: 100, hide: 300 }} overlay={renderTooltip}>
			<Button variant='outline-warning' onClick = {handleClick} style = {{width:"30px", height: "30px", position:"relative"}}> 
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16" style = {{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
					<path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
				</svg>
			</Button> 
		</OverlayTrigger>
		<div className="feedback">
			{show && typedText}
		</div>
	</div>
	)
}
