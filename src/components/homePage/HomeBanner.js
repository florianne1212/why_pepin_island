import React from 'react'

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
				<video
					height="100%"
					width="100%"
					loop
					autoPlay
					src={require("../../assets/video/video.mp4")}
				/>
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