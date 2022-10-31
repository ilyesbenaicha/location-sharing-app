import React from 'react'
import  ReactDOM  from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './SidDrawer.css'
const SideDrower = props => {
    const content = <CSSTransition
    in={props.show}
    timeout={200}
    classNames="slide-in-left"
    mountOnEnter
    unmountOnExit
  >
    <aside className="side-drawer" onClick={props.onClick}>{props.children}</aside>
  </CSSTransition>
  return (
ReactDOM.createPortal(content, document.getElementById('sidraw-hook'))  )
}

export default SideDrower