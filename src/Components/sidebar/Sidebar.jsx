import React from 'react'
import "./sidebar.scss";
import DasboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined'; 
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import {useContext} from "react";

const Sidebar = () => {
  const { dispatch } = useContext( DarkModeContext );
  return ( 
    <div className='sidebar '>
        <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo"> Vallée Verte Admin </span>
        </Link>
          
        </div>
        <hr />
        <div className="center">
        <ul>
          <p className="title"> MAIN </p>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>
              <DasboardIcon className="icon"/>
              <span > Dashboard </span>
            </li>
            </Link>
            <p className="title"> LISTS </p> 
            <Link to="/users" style={{textDecoration:"none"}}>
              <li>
               <PersonOutlineOutlinedIcon className="icon"/>            
                <span > Utilisateurs </span>
              </li>
            </Link> 
            <Link to="/budget" style={{textDecoration:"none"}}>
            <li>
              <CrisisAlertOutlinedIcon className="icon"/>
              <span > Budgets </span>
            </li>
            </Link>
            <Link to="/budget" style={{textDecoration:"none"}}>
            <li>
              <PaymentOutlinedIcon className="icon"/>
              <span > Versements </span>
            </li>
            </Link>
            <Link to="/budget" style={{textDecoration:"none"}}>
            <li>
              <ModeStandbyOutlinedIcon className="icon"/>
              <span > Motifs </span>
            </li>
            </Link> 
            <p className="title"> USEFUL </p>
            <Link to="/stat" style={{textDecoration:"none"}}>
            <li>
            <BarChartOutlinedIcon className="icon"/>            
              <span > Stats </span>
            </li>  
            </Link>
            <Link to="/notif" style={{textDecoration:"none"}}>
            <li>
              <NotificationsActiveOutlinedIcon className="icon"/>
              <span > Notifications  </span>
            </li>
            </Link> 
            <p className="title"> SERVICE </p>
            <Link to="/systemH" style={{textDecoration:"none"}}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon  className="icon"/>
              <span > System Health </span>
            </li>
            </Link> 
            <Link to="/logs" style={{textDecoration:"none"}}>
            <li>
              <PsychologyOutlinedIcon  className="icon"/>
              <span >Logs</span>
            </li>
            </Link>
            <Link to="/setting" style={{textDecoration:"none"}}>
             <li>
              <SettingsApplicationsOutlinedIcon  className="icon"/>
              <span >Settings</span>
            </li>
            </Link>
            <p className="title"> USER </p>
            
              <>  
            <Link to="/login" style={{textDecoration:"none"}}>
             <li>
              <ManageAccountsOutlinedIcon  className="icon"/>
              <span >Profile</span>
            </li>
            </Link>
            </>
            
            <>
            <Link to="/logout" style={{textDecoration:"none"}}>
             <li> 
              <LogoutOutlinedIcon className="icon"/>
              <span >Logout</span>
            </li>
            </Link>
            </>
            
          </ul>
        </div>
        
        <div className="bottom">
          <div 
          className="colorOption" 
          onClick={()=> dispatch({type:"LIGHT"})}>
          </div>
          <div 
          className="colorOption" 
          onClick={()=> dispatch({type:"DARK"})}>
          </div>
        </div>
    </div>
  )
}

export default Sidebar