import interact from 'interactjs'
import { useEffect } from 'react'

// Javascript mod function has a known bug... (https://stackoverflow.com/questions/4467539/javascript-modulo-gives-a-negative-result-for-negative-numbers)
function mod(n, m) {
	return ((n % m) + m) % m;
}


export default function Arrow() {
	useEffect(() => {
		var angle = 0

		interact('#rotate-area').gesturable({
		listeners: {
			move (event) {
				var arrow = document.getElementById('arrow')
				var angleLetter = document.getElementById('angle-letter')

				// The change in angle since previous event
				angle += event.da

				var dict = [
					{ max: 11.25, dir: 'N' },
					{ max: 33.75,  dir: 'NNE' },
					{ max: 56.25,  dir: 'NE' },
					{ max: 78.75, dir: 'ENE' },
					{ max: 101.25,  dir: 'E' },
					{ max: 123.75,  dir: 'ESE' },
					{ max: 146.25, dir: 'SE' },
					{ max: 168.75,  dir: 'SSE' },
					{ max: 191.25, dir: 'S' },
					{ max: 213.75,  dir: 'SSW' },
					{ max: 236.25, dir: 'SW' },
					{ max: 258.75,  dir: 'WSW' },
					{ max: 281.25, dir: 'W' },
					{ max: 303.75, dir: 'WNW' },
					{ max: 326.25,  dir: 'NW' },
					{ max: 348.75, dir: 'NNW' },
					{ max: 360, dir: 'N' }
				];

				arrow.style.transform = 'rotate(' + angle + 'deg)'

				// All of this is simply for the angle and direction being displayed
				const modAngle = mod(angle, 360)
				document.getElementById('angle-info').textContent =
					(modAngle.toFixed(2)) + '\u00b0'
				
				for(var i = 1; i < dict.length; i++){
					if(modAngle > dict[i-1].max && modAngle < dict[i].max){
						angleLetter.innerHTML = dict[i].dir;
					}
				}
				console.log(angleLetter.innerHTML)
			
			}
		}
		})
	})
	
	return (
		<div id="rotate-area">
			<div id="angle-info">0°</div>
			<div id="angle-direction">Direction: <span id="angle-letter">N</span></div>
			<svg id="arrow" viewBox="0 0 100 100">
				<polygon points="50,0 75,25 62.5,25 62.5,100 37.5,100 37.5,25 25,25" fill="#57b974"></polygon>
			</svg>
		</div>
	)
}