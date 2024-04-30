import React, { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

const Admin = ({addPassage}) => {
	const [passage, setPassage] = useState("")
	const [summary, setSummary] = useState("")
	const [feedback, setFeedback] = useState(false)
	const [passageHighlight, setPassageHighlight] = useState("")
	const [summaryHighlight, setSummaryHighlight] = useState("")
	const [passageNum, setPassageNum] = useState(null)

	const parseHighlight = (text) => {
		let arr = text.split(" ")
		let obj = {}
		arr.forEach((sep, index) => {
			let a = sep.substring(1,sep.length-1).split(",")
			obj[index] = [parseInt(a[0]), parseInt(a[1])]
		})
		return obj
	}

	const handleSubmit = () => {
		let obj = {
			"text": passage,
			"summary": summary,
			"text-highlight": parseHighlight(passageHighlight),
			"summary-highlight": parseHighlight(summaryHighlight),
			"feedback": Boolean(feedback),
			"passageNum": parseInt(passageNum)
		}
		addPassage(obj)
		alert("Added to backend")
	}

	return (
		<Form>
			<Form.Label>Passage</Form.Label>
			<Form.Control type="text" placeholder="Enter passage" value={passage} onChange={(e)=>setPassage(e.target.value)}></Form.Control>

			<Form.Label>Summary</Form.Label>
			<Form.Control type="text" placeholder="Enter summary" value={summary} onChange={(e)=>setSummary(e.target.value)}></Form.Control>

			<Form.Label>Passage Number</Form.Label>
			<Form.Select aria-label="Default select example" value = {passageNum} onChange = {(e) => setPassageNum(e.target.value)}>
				<option>Select Passage Number</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</Form.Select>

			<Form.Label>Is it a good summary?</Form.Label>
			<Form.Check // prettier-ignore
				type="switch"
				onChange = {(e)=>setFeedback(e.target.value)}
				value={feedback}
			/>

			<Form.Label>Passage Highlight</Form.Label>
			<Form.Control type="text" placeholder="Enter passage" value={passageHighlight} onChange={(e)=>setPassageHighlight(e.target.value)}></Form.Control>

			<Form.Label>Summary Highlight</Form.Label>
			<Form.Control type="text" placeholder="Enter summary" value={summaryHighlight} onChange={(e)=>setSummaryHighlight(e.target.value)}></Form.Control>
			
			<Button variant="primary" onClick={handleSubmit} >
				Add Task
			</Button>
		</Form>
	)
}

export default Admin