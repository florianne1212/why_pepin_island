import React from 'react'
import Videotest from '../../assets/video/video.mp4'

import {
	Banner,
	Video,
	BannerTitle,
	Canvas,
	Headline
} from "../../styles/homeStyles"

const HomeBanner = () => {
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
			
			{/* <Canvas />
			<BannerTitle>
				<Headline>DIG</Headline>
				<Headline>DEEP</Headline>
			</BannerTitle> */}
		</Banner>
	)
}

export default HomeBanner