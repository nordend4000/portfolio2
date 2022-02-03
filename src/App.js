import React, { useState, useEffect } from "react"
import { Switch, Route, useLocation, useHistory } from "react-router-dom"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import { AnimatePresence } from "framer-motion/dist/framer-motion"
import "./styles/App.scss"
import "./styles/styles.scss"

function App() {
	const location = useLocation()
	const history = useHistory()
	const [isFirstMount, setIsFirstMount] = useState(true)

	useEffect(() => {
		const unlisten = history.listen(() => {
			isFirstMount && setIsFirstMount(false)
		})
		return unlisten
	}, [history, isFirstMount])

	return (
		<AnimatePresence
			exitBeforeEnter
			onExitComplete={() => {
				if (typeof window !== "undefined") {
					window.scrollTo(0, 0)
				}
			}}>
			<Switch location={location} key={location.pathname}>
				<Route
					exact
					path='/'
					component={props => <Home isFirstMount={isFirstMount} {...props} />}
				/>
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/skills' component={Skills} />
				<Route path='/contact' component={Contact} />
				<Route path='/about' component={About} />
				<Route component={NotFound} />
			</Switch>
		</AnimatePresence>
	)
}

export default App
