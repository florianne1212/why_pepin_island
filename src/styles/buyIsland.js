import styled from 'styled-components'



export const Main = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: #11737E;
  h2 {
	color: #11737E;
	a {
		width: 500px;
    	height: 50px;
		color: #11737E;
	}
  }
`

export const Home = styled.div `
	height: 0px;
    width: 100%;
    position: absolute;
    top: 72px;
    right: 0;
    left: 50px;
    z-index: 99;

    a {
        font-size: 1.8rem;
        font-weight: 800;
        color: black;
    }

    span {
        height: 1rem;
        width: 1rem;
        background: #11737E;
        color: #11737E;
        margin: 0 4px;
        border-radius: 100%;
        display: inline-block;
        position: relative;
        bottom: 2px;
    }

`