import React from "react"
import { BsStarFill } from "react-icons/bs"
import { BsStarHalf } from "react-icons/bs"
import { BsStar } from "react-icons/bs"
import { v4 as uuidV4 } from "uuid"

function Stars({ data, level, title, icons }) {
	const getStars = x => {
		let array = []
		for (let i = Math.floor(x); i > 0; i--) {
			array.push(<BsStarFill />)
		}
		if (x % 1 !== 0) {
			array.push(<BsStarHalf />)
		}
		while (array.length < 5) {
			array.push(<BsStar />)
		}
		return array
	}
	return (
		<div className='Stars'>
			<h3 className={`Stars__title ${title}`}>{data}</h3>
			{getStars(level).map(el => (
				<div className={`Stars__icons ${icons}`} key={uuidV4()}>
					{el}
				</div>
			))}
		</div>
	)
}

export default Stars
