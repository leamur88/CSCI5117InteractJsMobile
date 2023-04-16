import interact from 'interactjs'
import { useEffect } from 'react'




export default function Home() {
	useEffect(() => {
		var angle = 0

		interact('#rotate-area').gesturable({
		listeners: {
			move (event) {
			var arrow = document.getElementById('arrow')

			angle += event.da

			arrow.style.transform = 'rotate(' + angle + 'deg)'

			document.getElementById('angle-info').textContent =
				angle.toFixed(2) + '\u00b0'
			}
		}
		})
	})
	
	return (
		<div id="rotate-area">
			<div id="angle-info">0°</div>
			<svg id="arrow" viewBox="0 0 100 100">
				<polygon points="50,0 75,25 62.5,25 62.5,100 37.5,100 37.5,25 25,25" fill="#29e"></polygon>
			</svg>
		</div>
	)
}