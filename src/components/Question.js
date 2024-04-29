import React from 'react'

import { Quest } from './Quest'
import { Button } from 'react-bootstrap'

export const Question = () => {
  return (
	<div className='question-box'>
		<Quest {...{
			q_number: 10, 
			q_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget efficitur augue. Nullam pharetra dignissim eros vel molestie. Vestibulum cursus accumsan sem, id dignissim orci aliquet at. Maecenas accumsan, ipsum id rhoncus rhoncus, nibh mauris finibus metus, aliquet semper magna justo nec nisl.",
			q_choices: ["Lorem", "ipsum", "dolor", "sit"],
		}}/>
		<div className='question-nav'>
			<Button> Previous</Button> <Button> Next</Button>
		</div>
	</div>
  )
}
