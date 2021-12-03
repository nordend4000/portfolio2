import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import TopMenu from "./components/TopMenu"
import Footer from "./components/Footer"
import SideLine from "./components/SideLine"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import ScrollToTop from "./components/ScrollToTop"
import { Helmet } from "react-helmet"
import "./styles/App.css"
import "./styles/styles.scss"

function App() {
	return (
		<div className='wrap'>
			<BrowserRouter>
				<Helmet>
					<title>Romain GIOUX - Portfolio</title>
					<meta
						name='title'
						content='Romain GIOUX - Portfolio WEB DEVELOPER'
						data-react-helmet='true'
					/>
					<meta
						name='description'
						content='Romain GIOUX - WEB DEVELOPER PORTFOLIO. Projects designed and built with love from scratch.'
						data-react-helmet='true'
					/>
					<meta name='author' content='Romain Gioux' />
				</Helmet>
				<ScrollToTop />
				<SideLine />
				<div className='App'>
					<TopMenu />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/portfolio' component={Portfolio} />
						<Route path='/skills' component={Skills} />
						<Route path='/contact' component={Contact} />
						<Route path='/about' component={About} />
						<Route component={NotFound} />
					</Switch>
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
