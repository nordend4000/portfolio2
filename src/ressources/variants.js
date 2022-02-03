export const Page = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		duration: 0.4,
		transition: {
			duration: 0.4,
			//ease: [0.6, -0.05, 0.01, 0.99],
			//ease: [0.5, 0, 0.75, 0],
			//ease: [0.76, 0, 0.24, 1],
			ease: [0.45, 0, 0.55, 1],
		},
	},
	exit: {
		opacity: 0,
		duration: 0.5,
		transition: {
			duration: 0.5,
			//ease: [0.6, -0.05, 0.01, 0.99],
			ease: [0, 0.55, 0.45, 1],
		},
	},
}
