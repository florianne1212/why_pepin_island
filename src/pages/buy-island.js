
import React from 'react'
import { Main, Home} from '../styles/buyIsland';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";
import {Link} from 'gatsby'



const GlobalStyle = createGlobalStyle`

	//html, body {
	//	height: 100%;
	//}
	
	${normalize}
	* {
		text-decoration: none;
	}

	html {
		box-sizing: border-box;
		-webkit-font-smoothing: antialised;
		font-size: 16px
	}
	

	body {
		
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background : #F5E9E2;
		overscroll-behavior: none;
		overflow-x: hidden
	}
`

const Buy = () => {

	return (
		<div>
			<GlobalStyle />
			<Main>
				<h2>
					<a href="https://www.nzsothebysrealty.com/purchasing/property/NEL00334/pepin-island-875-cable-bay-road-nelson/">Just Buy the island</a>
				</h2>
			</Main>
			<Home>
				<Link to='/'>
					FL<span />RIANNE
				</Link>	
			</Home>
		</div>

	)
}

export default Buy