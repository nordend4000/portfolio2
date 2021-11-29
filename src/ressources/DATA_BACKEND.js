import { IoLogoNodejs } from "react-icons/io5"
import { SiMysql } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { AiOutlineFire } from "react-icons/ai"
import { SiHeroku } from "react-icons/si"
import { SiNetlify } from "react-icons/si"
import { FaPhp } from "react-icons/fa"

const DATA_BACKEND = [
	{
		logo: <IoLogoNodejs className='Stars-container__icons' />,
		data: "Node.js",
		level: 3,
		title: "white-text",
		icons: "red-text",
	},
	{
		logo: <SiMongodb className='Stars-container__icons' />,
		data: "MongoDB",
		level: 4,
		title: "white-text",
		icons: "red-text",
	},
	{
		logo: <FaPhp className='Stars-container__icons' />,
		data: "PHP",
		level: 3,
		title: "white-text",
		icons: "red-text",
	},
	{
		logo: <SiMysql className='Stars-container__icons' />,
		data: "SQL",
		level: 3.5,
		title: "white-text",
		icons: "red-text",
	},
	{
		logo: <AiOutlineFire className='Stars-container__icons' />,
		data: "Firebase",
		level: 3,
		title: "white-text",
		icons: "red-text",
	},
	{
		logo: <SiNetlify className='Stars-container__icons' />,
		data: "Netlify",
		level: 3.5,
		title: "white-text",
		icons: "red-text",
	},
	{
		logo: <SiHeroku className='Stars-container__icons' />,
		data: "Heroku",
		level: 3.5,
		title: "white-text",
		icons: "red-text",
	},
]
export default DATA_BACKEND
