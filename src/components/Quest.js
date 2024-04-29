import React from 'react'
import Form from 'react-bootstrap/Form'


export const Quest = ({q_number, q_text, q_choices}) => {
  return (
	<>
		<div>Question Number {q_number}</div> 
		<hr/>
		<div className='question'>
			<div>{q_text}</div>
			<div>
				<Form> {q_choices.map((text, index) => (
					<Form.Check
						name="choices"
						type="radio"
						id={"radio" + index}
						label={text}
					/>
				))
				}</Form>
			</div>	
	</div>
	</>
  )
}
