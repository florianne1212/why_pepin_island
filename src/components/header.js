import React, { useEffect } from "react"
import { Link } from "gatsby"

//styled components
import { HeaderNav, Logo, Menu } from '../styles/headerStyles.js'
import { Container, Flex } from '../styles/globalStyles.js'

//context
import {useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'

useEffect (() => {
	effect
	return () => {
		cleanup
	};
}, [input]);

const Header = () => {
	const dispatch = useGlobalDispatchContext()
	const {currentTheme} = useGlobalStateContext()

	const toggleTheme = () => {
		if (currentTheme === 'dark'){
			dispatch({type: 'TOGGLE_THEME', theme: 'light'})
		} else {
			dispatch({type: 'TOGGLE_THEME', theme: 'dark'})
		}
	}
	
	return (
		<HeaderNav>
			<Container>
					{console.log(currentTheme)}
				<Flex spaceBetween noHeight>
					<Logo>
						<Link to='/'>FURR</Link>
						<span onClick={toggleTheme}></span>
						<Link to='/'>W</Link>	
					</Logo>
					<Menu>
						<button>
							<span></span>
							<span></span>
						</button>
					</Menu>
				</Flex>
			</Container>
		</HeaderNav>
	)
}

export default Header