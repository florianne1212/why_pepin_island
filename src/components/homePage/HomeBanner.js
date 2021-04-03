import React, { useEffect, useRef } from 'react'
import Videotest from '../../assets/video/pepin_island.mp4'

import {
	Banner,
	Video,
	BannerTitle,
	Canvas,
	Headline,
} from "../../styles/homeStyles"

//context
import {useGlobalStateContext} from '../../context/globalContext'

//custom hook
import useWindowSize from '../../hooks/useWindowSize'

const HomeBanner = ({ onCursor }) => {
	let canvas = useRef(null)
	const size = useWindowSize()
	const { currentTheme } = useGlobalStateContext()
  
	useEffect(() => {
		let renderingElement = canvas.current
		let drawingElement = renderingElement.cloneNode()

		let drawingCtx = drawingElement.getContext('2d')
		let renderingCtx = renderingElement.getContext('2d')

		let lastX
		let lastY

		let moving = false

		renderingCtx.globalCompositeOperation = "source-over"
		renderingCtx.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff'
		renderingCtx.fillRect(0, 0, size.width, size.height)

		renderingElement.addEventListener('mouseover', e => {
			moving = true
			lastX = e.pageX - renderingElement.offsetLeft
			lastY = e.pageY - renderingElement.offsetTop
		})

		renderingElement.addEventListener('mouseup', e => {
			moving = false
			lastX = e.pageX - renderingElement.offsetLeft
			lastY = e.pageY - renderingElement.offsetTop
		})

		renderingElement.addEventListener('mousemove', e => {
			if (moving) {
				drawingCtx.globalCompositeOperation = "source-over"
				renderingCtx.globalCompositeOperation = "destination-out"

				let currentX = e.pageX - renderingElement.offsetLeft
				let currentY = e.pageY - renderingElement.offsetTop

				drawingCtx.lineJoin = "round"
				drawingCtx.moveTo(lastX, lastY)
				drawingCtx.lineTo(currentX, currentY)
				drawingCtx.closePath()
				drawingCtx.lineWidth = 60
				drawingCtx.stroke()
				lastX = currentX
				lastY = currentY
				renderingCtx.drawImage(drawingElement, 0, 0)
			}
		})


	}, [currentTheme])

	const container = {
		initial: { y: 800 },
		animate: {
		  y: 0,
		  transition: {
			staggerChildren: 0.2,
		  },
		},
	  }
	  const item = {
		initial: { y: 800 },
		animate: {
		  y: 0,
		  transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9],
		  },
		},
	  }

	return (
		<Banner>
			<Video>
				<video width="100%" height="100%" loop autoPlay controls muted>
					<source src={Videotest} type="video/mp4"/>
				</video>
			</Video>
			<Canvas
			    height={size.height}
				width={size.width}
				ref={canvas}
				onMouseEnter={() => onCursor("hovered")}
				onMouseLeave={onCursor}
			/>
			<BannerTitle variants={container} initial="initial" animate="animate">
				<Headline variants={item}>PEPIN</Headline>
				<Headline variants={item}>ISLAND</Headline>
			</BannerTitle>
		</Banner>
	)
}

export default HomeBanner