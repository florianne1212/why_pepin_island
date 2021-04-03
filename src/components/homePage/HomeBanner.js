import React, { useEffect, useRef } from 'react'
import Videotest from '../../assets/video/video.mp4'

import {
	Banner,
	Video,
	BannerTitle,
	Canvas,
	Headline
} from "../../styles/homeStyles"

const HomeBanner = () => {
	let canvas = useRef(null)
  
	useEffect(() => {
		let renderingElement = canvas.current
		let drawingElement = renderingElement.cloneNode()

		let drawingCtx = drawingElement.getContect('2d')
		let renderingCtx = renderingElement.getContect('2d')

		let lastX
		let lastY

		let moving = false

		renderingCtx.globalCompositeOperation = 'source-over'
		renderingCtx.fillStyle = '#000000'
		renderingCtx.fillRect(0, 0, 100, 100)


	}, [])

	return (
		<Banner>
			<Video>
				{/* <video
					height="100%"
					width="100%"
					loop
					autoPlay
					src={require(".//../../assets/video/video.mp4")}
				/> */}
				<video width="100%" height="100%" loop autoPlay controls muted>
					<source src={Videotest} type="video/mp4"/>
				</video>
			</Video>
			<Canvas />
			<BannerTitle>
				<Headline>DIG</Headline>
				<Headline>DEEP</Headline>
			</BannerTitle>
		</Banner>
	)
}

export default HomeBanner