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
	...(
		() => {
			str = ""
			cmds = []
			for (let chr of "---") {
				str += chr
				cmds[cmds.length] = (() => {
					x += str
				})
			}
			return cmds
		}
	)(),
	() => {
		console.log(x + "\n")
		x = ""
	},
)
