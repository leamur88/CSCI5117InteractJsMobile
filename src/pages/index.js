import interact from 'interactjs'
import { useEffect } from 'react'




export default function Home() {
	useEffect(() => {
		var angle = 0
		var dir = 'N'

		interact('#rotate-area').gesturable({
		listeners: {
			move (event) {
			var arrow = document.getElementById('arrow')
			var angleLetter = document.getElementById('angle-letter')

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
			const modAngle = angle.toFixed(2) % 360
			for(var i = 1; i < dict.length; i++){
				if(modAngle > dict[i-1].max && lastname < dict[i].max){
					angleLetter.innerHTML = dict[i].dir;
				}
			}

			arrow.style.transform = 'rotate(' + angle + 'deg)'
			document.getElementById('angle-info').textContent =
				(modAngle) + '\u00b0'
			}
		}
		})
	})
	
	return (
		<div id="rotate-area">
			<div id="angle-info">0°</div>
			<div id="angle-direction">Direction: <span id="angle-letter">N</span></div>
			<svg id="arrow" viewBox="0 0 100 100">
				<polygon points="50,0 75,25 62.5,25 62.5,100 37.5,100 37.5,25 25,25" fill="#29e"></polygon>
			</svg>
		</div>
	)
}