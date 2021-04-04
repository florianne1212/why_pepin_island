import React, {useEffect} from 'react'

//scroll behavior
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'

import {Container} from '../../styles/globalStyles'
import {Content, HomeContentSection} from '../../styles/homeStyles'

const HomeContent = () => {

	const animation = useAnimation();
	const [contentRef, inView] = useInView({
		triggerOnce: true,
		rootMargin: '-300px',
	})

	useEffect(() => {
		if(inView) {
			animation.start('visible')
		}
	}, [animation, inView])

	return(
		<HomeContentSection
			ref={contentRef}
			animate={animation}
			initial='hidden'
			variants={{
				visible: {
					opacity: 1,
					y: 0,
					transition: {duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9]},
				},
				hidden: {
					opacity: 0,
					y: 72,
				}
			}}

		>
			<Container>
				<Content>
					Pepin Island is 3.5 kilometres long, and up to 2.1 kilometres wide. <br />
					It measures 5.18 square kilometresin area. The highest point is Stuart Hill, which rises to 401 metres. <br />
					The island is located on the northeast coast of Tasman Bay, with the smaller indentation of Delaware Bay to the east. <br />
					It is joined to the mainland by a naturally formed pathway made from boulders that have tumbled down nearby hillsides then been shaped into a causeway by the sea.
				</Content>
			</Container>
		</HomeContentSection>
	)
}

export default HomeContent