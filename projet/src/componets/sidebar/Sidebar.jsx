import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
            <span className="logo">Network Manager</span>
        </div>
        <div className='center'>
            <ul>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                <p className='title'>Main
                <p className='sous_title'> les application</p></p>
                <li>
                    <AccountBoxIcon className='icon'/>
                    <span>Users</span></li>
                    <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Statiqtique</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                    <SupervisorAccountIcon className='icon'/>
                    <span>admin</span>
                </li>
                <p className='title'>Branches
                <p className='sous_title'> Les branches</p>
                </p>
                <li>
                    <span>CBR</span>
                </li>
                <li>
                    <span>COM</span>
                </li>
                <li>
                    <span>GPL</span>
                </li>
                <p className='title'>Liaisons</p>
                <li>
                    <span>Adsl</span>
                </li>
                <li>
                    <span>Ooredoo</span>
                </li>
                <li>
                    <span>Mobilis</span>
                </li>
                <li>
                    <span>VPN</span>
                </li>
                <li>
                    <span>4G LTE</span>
                </li>
                <li>
                    <span>lLS(FO)</span>
                </li>
               
            </ul>

        </div>
        <div className='bottom'>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>

    </div>
  )
}

export default Sidebar