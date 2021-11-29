import React from "react"
import "../styles/Arrow.css"

export default function Arrow({ link, css }) {
	return (
		<div id='arrow' className={css}>
			<svg viewBox='0 0 120 100' fill='none' xmlns='http://www.w3.org/2000/svg'>
				<g id='triangles' clipPath='url(#clip0)'>
					<g id='darkgroup'>
						<path
							id='triangledark2'
							d='M111.667 52.5019C113.593 51.3899 113.593 48.6101 111.667 47.4981L81.3333 29.9852C79.4074 28.8733 77 30.2632 77 32.487V67.513C77 69.7368 79.4074 71.1267 81.3333 70.0148L111.667 52.5019Z'
							fillOpacity='0.54'
						/>
						<path
							id='triangledark1'
							d='M43.6667 52.5019C45.5926 51.3899 45.5926 48.6101 43.6667 47.4981L13.3333 29.9852C11.4074 28.8733 9 30.2632 9 32.487V67.513C9 69.7368 11.4074 71.1267 13.3333 70.0148L43.6667 52.5019Z'
							fillOpacity='0.54'
						/>
					</g>
					<g id='lightgroup'>
						<path
							id='trianglelight'
							d='M59.6667 52.5019C61.5926 51.3899 61.5926 48.6101 59.6667 47.4981L29.3333 29.9852C27.4074 28.8733 25 30.2632 25 32.487V67.513C25 69.7368 27.4074 71.1267 29.3333 70.0148L59.6667 52.5019Z'
							fillOpacity='0.54'
						/>
					</g>
				</g>
				<defs>
					<clipPath id='clip0'>
						<rect
							width='120'
							height='100'
							fill='white'
							transform='translate(120 100) rotate(180)'
						/>
					</clipPath>
				</defs>
			</svg>
			{link}
		</div>
	)
}
