import React, { useRef, useState, useLayoutEffect } from "react"
import emailjs from "@emailjs/browser"
import { gsap } from "gsap"
import Recaptcha from "react-recaptcha"
import { BiMailSend } from "react-icons/bi"
import Triptic2 from "../ressources/Triptic2"
import FooterLinks from "../components/FooterLinks"
import "../styles/contact.scss"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { Page } from "../ressources/variants"
import { motion } from "framer-motion/dist/framer-motion"

function Contact() {
	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [message, setMessage] = useState("")
	const [nameChecked, setNameChecked] = useState("")
	const [emailChecked, setEmailChecked] = useState("")
	const [messageChecked, setMessageChecked] = useState("")
	const [formChecked, setFormChecked] = useState("")
	const [error, setError] = useState("")
	const [answer, setAnswer] = useState("")
	const [humanVerified, setHumanVerified] = useState(false)
	const [sending, setSending] = useState(false)

	const contactTripticRef = useRef()
	const contactRef = useRef()
	const tl = useRef()

	useLayoutEffect(() => {
		gsap.from(contactTripticRef.current, {
			duration: 2,
			scale: 0.4,
			rotate: 270,
		})
	}, [])
	useLayoutEffect(() => {
		const q = gsap.utils.selector(contactRef)
		tl.current = gsap
			.timeline()
			.from(q("#contactTitle"), {
				opacity: 0,
				duration: 1,
				x: -1000,
				ease: "back",
				delay: 0.4,
			})
			.from(q("#contactSubtitle"), {
				opacity: 0,
				duration: 0.4,
				y: 50,
				ease: "power1",
			})
			.from(q("#contactP"), {
				opacity: 0,
				duration: 1,
				scale: 0.9,
				ease: "back",
			})
		return () => {
			tl.current.kill()
		}
	}, [])

	const verifyCallback = function (response) {
		if (response) {
			setHumanVerified(true)
		}
	}
	const onloadCallback = function () {
		console.log("grecaptcha is ready!")
		console.log("humanVerified", humanVerified)
	}
	const regex_email = new RegExp(
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	)
	const checkEmail = () => {
		if (email === "" || !email) return setEmailChecked("")
		if (!regex_email.test(email))
			return setEmailChecked("Please enter a valid e-mail address.")
		if (regex_email.test(email)) {
			if (message !== "" && name !== "" && regex_email.test(email)) {
				setFormChecked("")
			}
			setEmailChecked("")
			return
		}
	}
	const checkInput = () => {
		if (nameChecked !== "" && name !== "") setNameChecked("")
		if (messageChecked !== "" && message !== "") setMessageChecked("")
		if (message !== "" && name !== "" && regex_email.test(email)) {
			setFormChecked("")
		}
	}

	const sendMessage = () => {
		if (name === "") {
			setNameChecked("Please enter your name or the name of your company.")
		}
		if (message === "") {
			setMessageChecked("Please enter your message before sending.")
		}
		if (
			name === "" ||
			email === "" ||
			message === "" ||
			emailChecked === "Please enter a valid e-mail address."
		) {
			setFormChecked(
				"Some errors have been found. Please double check your form.",
			)
			return
		}
		if (!humanVerified) {
			return setMessageChecked(
				"Please use Recaptcha to verify that you are a real Human !",
			)
		}
		if (
			name !== "" &&
			email !== "" &&
			message !== "" &&
			formChecked === "" &&
			emailChecked === "" &&
			humanVerified
		) {
			const form = {
				user_name: name,
				user_email: email,
				message: message,
			}
			setSending(true)
			sendEmailjs(form)
		}
	}

	function sendEmailjs(form) {
		emailjs
			.send(
				`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
				`${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
				form,
				`${process.env.REACT_APP_EMAILJS_USER_ID}`,
			)
			.then(
				result => {
					setAnswer(
						"Your message has been sent successfully. Thanks for reaching out. I will answer you as soon as possible.",
					)
					setError("")
					setName("")
					setEmail("")
					setMessage("")
					setSending(false)
				},
				error => {
					setError(
						"Oooops something wrong happened, please try again to send your message.",
					)
					setAnswer("")
					setSending(false)
				},
			)
	}

	return (
		<motion.div initial='initial' animate='animate' exit='exit' variants={Page}>
			<Layout>
				<div className='Contact' ref={contactRef}>
					<Helmet>
						<title>Romain GIOUX - Contact</title>
						<meta
							name='title'
							content='Romain GIOUX - Portfolio WEB DEVELOPER'
							data-react-helmet='true'
						/>
						<meta
							name='description'
							content='Romain GIOUX - WEB DEVELOPER PORTFOLIO: Contact form to get in touch and tell your thought.'
							data-react-helmet='true'
						/>
						<meta name='author' content='Romain Gioux' />
					</Helmet>
					<div className='Contact__landing'>
						<div className='Contact__landing__box1'>
							<h1 id='contactTitle'>Contact</h1>
							<h2
								className='Contact__landing__box1__subtitle'
								id='contactSubtitle'>
								New project, job offer, freelancing...
							</h2>
						</div>
						<div className='Contact__landing__box2' id='contactP'>
							<p className=''>
								<b>Let's talk ...</b>
							</p>
							<p className=''>
								Do you need advice to <b>create a new project </b>?
							</p>
							<p className=''>
								Are you <b> looking for </b> a Web Developer?
							</p>
							<p className=''>
								Would you like to get a <b> quote </b> for a freelance mission?
							</p>
							<p className=''>
								Whatever your motivation, please don't hesitate to
								<b> get in touch</b>.
							</p>
							<p>Send me directly an E-mail or use the contact form below.</p>
							<p className=''>I would be delighted to reply your message.</p>
						</div>
					</div>
					<div className='triptic2-pages' ref={contactTripticRef}>
						<Triptic2 />
					</div>
					<div className='Contact__form'>
						<label className='Contact__form__label'>Name :</label>
						<input
							className='Contact__form__input'
							placeholder='Your Name'
							type='text'
							onChange={e => setName(e.target.value.toString())}
							onBlur={checkInput}
							value={name}
						/>
						<div className='Contact__form__check'>{nameChecked}</div>
						<label className='Contact__form__label'>e-Mail :</label>
						<input
							className='Contact__form__input'
							placeholder='Your email address'
							type='email'
							onChange={e => setEmail(e.target.value.toString())}
							onBlur={checkEmail}
							value={email}
						/>
						<div className='Contact__form__check'>{emailChecked}</div>
						<label className='Contact__form__label'>Message :</label>
						<textarea
							className='Contact__form__textarea '
							placeholder='Your message...'
							onChange={e => setMessage(e.target.value.toString())}
							onBlur={checkInput}
							value={message}
						/>
						<div className='Contact__form__check'>{messageChecked}</div>
					</div>
					<div className='Contact__recaptcha'>
						<Recaptcha
							sitekey={`${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`}
							render='explicit'
							verifyCallback={verifyCallback}
							onloadCallback={onloadCallback}
						/>
					</div>
					{sending ? (
						<div className='sending-email'>
							<img
								alt='sending email animation'
								src={process.env.PUBLIC_URL + `/images/loading.svg`}
							/>
						</div>
					) : (
						(answer || error) && (
							<div className=''>
								{answer && <div className='Contact__answer'>{answer}</div>}
								{error && <div className='Contact__error'>{error}</div>}
							</div>
						)
					)}
					<div className='Contact__send'>
						<div className='Contact__form__check'>{formChecked}</div>
						<div className='Contact__send__btn' onClick={sendMessage}>
							<BiMailSend /> Send Message
						</div>
					</div>
					<div className='Contact-direct'>
						If you prefer you can send me directly an E-mail :
					</div>
					<div className='Contact-subtitle' id='contactSubtitle'>
						romaingiouxdev@gmail.com
					</div>
					<FooterLinks />
				</div>
			</Layout>
		</motion.div>
	)
}

export default Contact
