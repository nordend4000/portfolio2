import StackLine1 from "./StackLine1"
import StackLine2 from "./StackLine2"
import StackLine3 from "./StackLine3"
import StackLine5 from "./StackLine5"
import StackLine10 from "./StackLine10"

const DATA_PORTFOLIO = [
	{
		index: 1,
		title: "E-commerce Website",
		subtitleP1: "High Quality Print & Digital photographies for sale.",
		subtitleP2:
			"Store including User Accounts & Admin Dashboard to manage orders. Payment handled via Stripe Checkout.",
		stackLine: <StackLine1 />,
		depP1: "Axios / react-router / react-helmet / react-slick",
		depP2: "UI : CSS & Framer Motion",
		depP3: "Back-End: Node.js / MongoDB / Bcryptjs ",
		depP4: "Emails : Emailjs / Storage :  Cloudinary",
		depP5: "Hosting : Client on Netlify, Server on Heroku",
		linkGit: "https://github.com/nordend4000/rebecca-anderson-photography",
		linkSite: "https://rebecca-anderson-photography.netlify.app",
		button: "View Store",
		img1: "reb-desktop.png",
		img2: "reb-phone.png",
	},
	{
		index: 2,
		title: "Community Network",
		subtitleP1: "Social App to connect outdoor sport addicts.",
		subtitleP2:
			"Join the community and post your planned trips to find people around you. Browse upcomming trips using an interactive map.",
		stackLine: <StackLine2 />,
		depP1: "Axios / react-router / react-recaptcha / Date-Picker",
		depP2: "Maps : Leaflet & GeoCode",
		depP3: "Authentification & Storage : Firebase /  FireStore ",
		depP4: "UI : Custom Bootstrap / Emails : Emailjs.com",
		depP5: "Hosting : Client on Netlify",
		linkGit: "https://github.com/nordend4000/never-alone",
		linkSite: "https://neveralone.netlify.app/",
		button: "View Website",
		img1: "neveralone.png",
		img2: "neveralone-phone.png",
	},
	{
		index: 3,
		title: "Weather App",
		subtitleP1:
			"Next.js Application fetching data from OpenWeather API including weather maps. ",
		subtitleP2:
			"A searching map allow you to get the weather anywhere in the world with only one click.",
		stackLine: <StackLine10 />,
		depP1: "UI : Tailwind Css including light/dark mode.",
		depP2: "UX : SweetAlert, NProgress, Framer Motion",
		depP3: "Search : Google Map API (Geocoding, MapsElevation, Places)",
		depP4: "Maps : Leaflet, react-leaflet, OpenStreetMap",
		depP5: "Hosting : Vecel",
		linkGit: "https://github.com/nordend4000/ezy-weather",
		linkSite: "https://ezy-weather.vercel.app",
		button: "Check Weather",
		img1: "ezy.png",
		img2: "ezy-phone.png",
	},
	{
		index: 4,
		title: "Currency Converter",
		subtitleP1:
			"Real-time Currency converter and historic rates. Never miss new market trends and convert up to 160 different currencies.",
		stackLine: <StackLine3 />,
		depP1: "TypeScript",
		depP2: "Date-fns / axios / react-icons / currency-flags",
		depP3: "Charts : recharts-js",
		depP4: "Source API : exchangerate.host",
		depP5: "Hosting : Netlify",
		linkGit: "https://github.com/nordend4000/ezy-currency",
		linkSite: "https://ezy-currency.netlify.app",
		button: "View App",
		img1: "currency.png",
		img2: "currency-phone.png",
	},
	{
		index: 5,
		title: "Calendar App",
		subtitleP1: "My Time Line - Calendar organizer with email reminder.",
		subtitleP2:
			"Popular application but challenging project with complex features including drag and drop, multiple date events and filtering.",
		stackLine: <StackLine5 />,
		depP1: "React App / Date-fns / react-icons",
		depP2: "Emails : Nodemailer / Schedule : node-cron",
		depP3: "RestAPI : Node.js / Express / Axios",
		depP4: "Database : MySQL hosted on CLEARDB",
		depP5: "Hosting : Client on Netlify & Server on Heroku",
		linkGit: "https://github.com/nordend4000/my-time-line-calendar",
		linkSite: "https://mytimeline-calendar.netlify.app",
		button: "View App",
		img1: "calendar.png",
		img2: "calendar-phone.png",
	},
]
export default DATA_PORTFOLIO
