import React from 'react'
import WebHeader from './header'
import WebFooter from './footer'

const WebLayout = ({ children }) => {
  return (
    <>
      <WebHeader />
        {children}
      <WebFooter />
    </>
  )
}

export default WebLayout;
