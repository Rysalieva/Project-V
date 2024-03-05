// 3D Scroll

let zSpacing = -1000,
		lastPos = zSpacing / 5,
		$frames = document.getElementsByClassName('frame'),
		frames = Array.from($frames),
		zVals = []

window.onscroll = function() {

	let top = document.documentElement.scrollTop,
			delta = lastPos - top

	lastPos = top

	frames.forEach(function(n, i) {
		zVals.push((i * zSpacing) + zSpacing)
		zVals[i] += delta * -5.5
		let frame = frames[i],
				transform = `translateZ(${zVals[i]}px)`,
				opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
	})

}

window.scrollTo(0, 1)

// Audio

let sound_Button = document.querySelector('.sound_button'),
		source = document.querySelector('.sources')

sound_Button.addEventListener('click', e => {
	sound_Button.classList.toggle('paused')
	source.paused ? source.play() : source.pause()
})

window.onfocus = function() {
	sound_Button.classList.contains('paused') ? source.pause() : source.play()
}

window.onblur = function() {
	source.pause()
}

