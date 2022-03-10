import StackLine4 from "./StackLine4"
import StackLine6 from "./StackLine6"
import StackLine7 from "./StackLine7"
import StackLine8 from "./StackLine8"
import StackLine9 from "./StackLine9"
import StackLine0 from "./StackLine0"
import StackLine11 from "./StackLine11"
import StackLine12 from "./StackLine12"

const DATA_MOREPROJECTS = [
	{
		index: 0,
		title: "Web Dev Portfolio",
		subtitle:
			"The current website you are looking at. My Portfolio is designed using Figma and built with React and SASS. Animations are crafted using GSAP, Framer Motion and Pixi.js. Emailjs handles the contact form submission.",
		stackLine: <StackLine0 />,
		linkGit: "https://github.com/nordend4000/portfolio2",
		linkSite: "https://romaingioux.dev",
		button: "View Portfolio",
		img: "portfolio.png",
	},
	{
		index: 1,
		title: "Logbook App",
		subtitle:
			"App to store Paragliding flights data, compute statistics, filter database and manage gear.",
		stackLine: <StackLine11 />,
		linkGit: "https://github.com/nordend4000/portfolio2",
		linkSite: "https://romaingioux.dev",
		button: "View Portfolio",
		img: "logbook.png",
	},
	{
		index: 2,
		title: "My Private Videos",
		subtitle:
			"Single page App to display videos with a nice filtering animation from Framer Motion.",
		stackLine: <StackLine12 />,
		linkGit: "https://github.com/nordend4000/my-private-video",
		linkSite: "https://my-private-video.netlify.app",
		button: "View Page",
		img: "private.png",
	},
	{
		index: 3,
		title: "Coding Wilderness",
		subtitle:
			"Fun Parallax landing page using GSAP ScrollTrigger. Designed from scratch using Figma and SVG's power.",
		stackLine: <StackLine6 />,
		linkGit: "https://github.com/nordend4000/codingwilderness",
		linkSite: "https://codingwilderness.netlify.app/",
		button: "View Page",
		img: "wilderness.png",
	},
	{
		index: 4,
		title: "Showcase Website",
		subtitle:
			'Website to promote the book "Beyond Simien Mountains". PHP Website with custom JavaScript and Responsive Design only CSS.',
		stackLine: <StackLine4 />,
		linkGit: "https://github.com/nordend4000/beyond-simien-moutains-",
		linkSite: "https://beyond-simienmountains.herokuapp.com",
		button: "View Website",
		img: "simien.png",
	},
	{
		index: 5,
		title: "Jahia's Blog",
		subtitle:
			"Bilingual blog with articles, real time comments, slider gallery and games. Website built using PHP and MySQL including User Account with authentification and contact form. Admin dashbord to post and manage website data.",
		stackLine: <StackLine7 />,
		linkGit: "https://github.com/nordend4000/Jahia",
		linkSite: "https://jahia-blog.herokuapp.com",
		button: "View Blog",
		img: "jahia.png",
	},
	{
		index: 6,
		title: "Mine Sweeper",
		subtitle:
			"Challenging JavaScript game built as a functional programming project. Fully tested using Jest for intergation & unit tests and Cypress for end to end tests. JavaScript app using Babel compiler, Parcel bundler and Lodash utility library.",
		stackLine: <StackLine9 />,
		linkGit: "https://github.com/nordend4000/Minesweeper",
		linkSite: "https://minesweeper-test.netlify.app",
		button: "View App",
		img: "minesweeper.png",
	},
	{
		index: 7,
		title: "End2End Calculator",
		subtitle:
			"Simple JavaScript calculator styled with CSS. Implementation of end to end testing using Cypress.io.",
		stackLine: <StackLine8 />,
		linkGit: "https://github.com/nordend4000/calculator",
		linkSite: "https://end2endcalculator.netlify.app",
		button: "View App",
		img: "calculator.png",
	},
]

export default DATA_MOREPROJECTS
