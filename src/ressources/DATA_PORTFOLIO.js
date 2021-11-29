import StackLine1 from "./StackLine1"
import StackLine2 from "./StackLine2"
import StackLine3 from "./StackLine3"
import StackLine4 from "./StackLine4"
import StackLine5 from "./StackLine5"

const DATA_PORTFOLIO = [
	{
		index: 1,
		title: "E-commerce Website",
		subtitleP1: "High Quality Print & Digital photographies for sale.",
		subtitleP2:
			"Store including User Accounts & Admin Dashboard to manage orders.",
		stackLine: <StackLine1 />,
		depP1: "Axios / react-router / react-helmet / react-slick",
		depP2: "Payment : Stripe Checkout ",
		depP3: "Authentification : Bcryptjs ",
		depP4: "Emails : Nodemailer / Storage :  Cloudinary",
		depP5: "Hosting : Client on Netlify & Server on Heroku",
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
		title: "Logbook Application",
		subtitleP1:
			"App to store Paragliding flights data, compute statistics, filter database and manage gear.",
		subtitleP2: "Upload gpx file to visualise flying trace on the map.",
		stackLine: <StackLine3 />,
		depP1: "Axios / Date-fns / react-icons",
		depP2: "Maps : Leaflet & Leaflet-gpx",
		depP3: "RestAPI : Node.js / Express / Axios",
		depP4: "Database : MongoDB & Mongoose",
		depP5: "Hosting : Client on Netlify & Server on Heroku",
		linkGit: "https://github.com/nordend4000/paraglidinglogbook",
		linkSite: "https://paraglidinglogbook.netlify.app/",
		button: "View App",
		img1: "logbook.png",
		img2: "logbook-phone.png",
	},
	{
		index: 4,
		title: "Showcase Website",
		subtitleP1: 'Website to promote the book "Beyond Simien Mountains".',
		subtitleP2:
			"Personal story and amazing photographies of a trek in Ethiopia to support local communities.",
		stackLine: <StackLine4 />,
		depP1: "PHP Website with custom JavaScript",
		depP2: "Responsive Design pure CSS",
		depP3: "Google recaptcha to secure contact Form",
		depP4: "Emails : LWS webmail",
		depP5: "Hosting : via FTP on LWS",
		linkGit: "https://github.com/nordend4000/beyond-simien-moutains-",
		linkSite: "https://beyondsimienmountains.com/",
		button: "View Website",
		img1: "simien.png",
		img2: "beyond-phone.png",
	},
	{
		index: 5,
		title: "Calendar App",
		subtitleP1: "My Time Line - Calendar organizer with email reminder.",
		subtitleP2:
			"Popular App but challenging project with complex features including drag and drop, multiple date events and filtering.",
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
