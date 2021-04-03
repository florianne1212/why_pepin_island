import React, {useState, useEffect} from "react"
import Layout from "../components/layout"

//context

import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext'

//components
import HomeBanner from '../components/homePage/HomeBanner'


const IndexPage = props => {
  const [isClient, setClient] = useState(false);
  const key = isClient ? "client" : "server";

  const {currentTheme, cursorStyles} = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType || false)
		dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
	}

  useEffect(() => {
    setClient(true);
  }, []);

  if ( !isClient ) return null;
  return (
    <div key={key}>
      <Layout>
        <HomeBanner onCursor={onCursor} />
      </Layout>
    </div>
  );
}

export default IndexPage
