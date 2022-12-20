import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Logo from '../../assets/FB_IMG_15780503266483794.jpg'


const Topbar = () => {
  return (
    <div className='topbar'>
         <div className="topbarWrapper">
            <div className="topLeft">
               <span className='logo'>AdminBoard</span>
            </div>
            <div className="topRight">
               <div className='topbarIconContainer'>
                  <NotificationsNone />
                  <span className='topIconBadge'>2</span>
               </div>
               <div className='topbarIconContainer'>
                  <Language />
                  <span className='topIconBadge'>2</span>
               </div>
               <div className='topbarIconContainer'>
                  <Settings />
               </div>
               <img src={Logo} alt='logo' className='topAvatar'/>
            </div>
         </div> 
    </div>
  )
}

export default Topbar
