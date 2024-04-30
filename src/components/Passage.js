import React from 'react'

export const Passage = ({passageText, highlight, highlightIndices}) => {

	let sortedHighlight = Object.values(highlightIndices).sort((a,b) => a[0] - b[0] > 0)
	
	const splitText = (text) => {
		let lines = text.split(/\\n/).map((line, index) => (
			<React.Fragment key={index}>
				{line}
				<br />
				<br />
			</React.Fragment>
			));
		console.log(text.split(/\r?\n/))
		return lines
	}

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
		<>
			<div className='passage-box'>
				<div className='passage'>
					{highlight ? colorText(passageText, sortedHighlight) : splitText(passageText)}
				</div>
			</div>
		</>
	)
}
