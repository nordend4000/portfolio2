import StackLine2 from "./StackLine2"
import StackLine3 from "./StackLine3"
import StackLine10 from "./StackLine11"
import StackLine11 from "./StackLine10"

const DATA_PROJECT_HOME = [
	{
		title: "Community Network",
		subtitle:
			"Social App to connect outdoor sport addicts. Join the community and post your planned trip to find people around you. Browse upcomming trips using an interactive map.",
		btn: "View Website",
		url: "https://neveralone.netlify.app/",
		git: "https://github.com/nordend4000/never-alone",
		image: "neveralone",
		stackLine: <StackLine2 />,
	},
	{
		title: "Currency Converter",
		subtitle: `Currency Converter and Historic rates using real-time data. Never miss new market trends and convert up to 160 different currencies.`,
		btn: "View App",
		url: "https://ezy-currency.netlify.app",
		git: "https://github.com/nordend4000/ezy-currency",
		image: "currency",
		stackLine: <StackLine3 />,
	},
	{
		title: "Weather Application",
		subtitle:
			"Ezy Weather developed a searching map to get the weather anywhere in the world and display the latest weather maps for precipitation, temperature, wind, pressure and clouds.",
		btn: "Check Weather",
		url: "https://ezy-weather.vercel.app/",
		git: "https://github.com/nordend4000/ezy-weather",
		image: "ezy",
		stackLine: <StackLine10 />,
	},
	{
		title: "Logbook Application",
		subtitle:
			"App to store Paragliding flights data, compute statistics, filter database and manage gear. Upload .gpx files to visualise flying trace on the map.",
		btn: "View App",
		url: "https://paraglidinglogbook.netlify.app",
		git: "https://github.com/nordend4000/paraglidinglogbook",
		image: "logbook",
		stackLine: <StackLine11 />,
	},
]
export default DATA_PROJECT_HOME
