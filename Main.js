#!/bin/nodejs

const rndSample = 100
let x = "";


((...args) => {
	setInterval(() => {
		for (let arg of args) {
			setTimeout(arg, (Math.random() * rndSample) % rndSample)
		}
	}, rndSample)
})(
	() => { x += ("---") },
	() => { x += ("--") },
	() => { x += ("-") },
	() => {
		console.log(x + "\n")
		x = ""
	},
)
