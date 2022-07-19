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
	...(() => {
		let str = ""
		let cmds = []
		for (let chr of "---") {
			str += chr
			cmds[cmds.length] = (eval(`() => {
				x += ${JSON.stringify(str)}
			}`))
			for (let cmd of cmds) {
				cmd()
			}
		}
		return cmds
	})(),
	() => {
		console.log(x)
		x = ""
	},
)
