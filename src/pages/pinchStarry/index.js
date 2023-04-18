import interact from 'interactjs'
import { useEffect } from 'react'

function dragMoveListener (event) {
	var target = event.target
	// keep the dragged position in the data-x/data-y attributes
	var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
	var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
	// translate the element
	target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
  
	// update the posiion attributes
	target.setAttribute('data-x', x)
	target.setAttribute('data-y', y)
  }

function reset () {
	scaleElement.style.transform = 'scale(1)'
  
	angleScale.angle = 0
	angleScale.scale = 1
  }


export default function Pinch() {
	useEffect(() => {
		var angleScale = {
			angle: 0,
			scale: 1
		  }
		  var gestureArea = document.getElementById('gesture-area')
		  var scaleElement = document.getElementById('scale-element')
		  var resetTimeout
		  
		  interact(gestureArea)
			.gesturable({
			  listeners: {
				start (event) {
				  angleScale.angle -= event.angle
		  
				  clearTimeout(resetTimeout)
				  scaleElement.classList.remove('reset')
				},
				move (event) {
				  // document.body.appendChild(new Text(event.scale))
				  var currentAngle = event.angle + angleScale.angle
				  var currentScale = event.scale * angleScale.scale
		  
				  scaleElement.style.transform =
					'rotate(' + currentAngle + 'deg)' + 'scale(' + currentScale + ')'
		  
				  // uses the dragMoveListener from the draggable demo above
				  dragMoveListener(event)
				},
				end (event) {
				  angleScale.angle = angleScale.angle + event.angle
				  angleScale.scale = angleScale.scale * event.scale
		  
				  resetTimeout = setTimeout(reset, 1000)
				  scaleElement.classList.add('reset')
				}
			  }
			})
			.draggable({
			  listeners: { move: dragMoveListener }
			})
	})
	
	return (
		<div id="gesture-area">
			<img src="https://upload.wikimedia.org/wikipedia/commons/archive/e/ea/20110204215237%21Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" alt="sample image" id="scale-element" />
		</div>
	)
}