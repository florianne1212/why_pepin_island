import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

//styled components

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

//components

import Header from './header'
import Cursor from './customCursor'

//context

import {useGlobalStateContext} from '../context/globalContext'

const GlobalStyle = createGlobalStyle`
	${normalize}
	* {
		text-decoration: none;
		cursor: none !important;
	}

	html {
		box-sizing: border-box;
		-webkit-font-smoothing: antialised;
		font-size: 16px
	}
	

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		background : ${props => props.theme.background};
		overscroll-behavior: none;
		overflow-x: hidden
	}
`


const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const darkTheme = {
    background: "#773344",
    text: "#F5E9E2",
		blue: '#11737E',
	}

	const lightTheme = {
    background: "#F5E9E2",
    text: "#773344",
		blue: '#11737E', 
  }

  const {currentTheme} = useGlobalStateContext()

	return (
		<ThemeProvider theme={currentTheme === 'dark'? darkTheme : lightTheme}>
			<Cursor />
			<Header />
			<GlobalStyle />
			<main>{children}</main>
		</ThemeProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
