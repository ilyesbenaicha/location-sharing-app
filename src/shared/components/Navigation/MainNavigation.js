import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Backdrop from '../../UIelements/Backdrop'
import MainHeader from './MainHeader'
import './MainNavigation.css'
import Navlinks from './Navlinks'
import SideDrower from './SideDrower'


const MainNavigation = props => {
  const [DrawerIsoPen, setDrawerIsoPen]= useState(false)
 const openDrawer=()=>{
setDrawerIsoPen(true)
  }
 const closeDrawer =()=>{
  setDrawerIsoPen(false)
 }
  return (
    <React.Fragment>
    {DrawerIsoPen && <Backdrop onClick={closeDrawer}/> }
    <SideDrower show={DrawerIsoPen} onClick={closeDrawer}>
    <nav className="main-navigation__drawer-nav">
      <Navlinks/></nav>
    </SideDrower> 
    <MainHeader>
<button className='main-navigation__menu-btn' onClick={openDrawer }>
    <span/>
    <span/>
    <span/>
</button>
<h1 className='main-navigation__title'><Link to="/">YourPlaces</Link></h1>
<nav className="main-navigation__header-nav">
    <Navlinks  />
</nav>
    </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation